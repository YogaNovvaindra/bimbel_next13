import { FC, useState } from "react";
import axios from "axios";
import { mutate } from "swr";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/pages/components/inputs/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface SesiEditProps {
  sesiId: string;
  data: any;
  onClose: () => void;
}

const schema = yup.object().shape({
  nama_sesi: yup
    .string()
    .required("tidak boleh kosong")
    .min(3, "nama sesi minimal 3 karakter"),
  jam_mulai: yup.string().required("tidak boleh kosong"),
  jam_selesai: yup.string().required("tidak boleh kosong"),
});

type FormData = yup.InferType<typeof schema>;

const SesiEdit: FC<SesiEditProps> = ({ sesiId, onClose, data }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { nama_sesi, jam_mulai, jam_selesai } = data;

    setIsLoading(true); // Set loading state to true

    try {
      await axios.put(`/api/sesi/${sesiId}`, {
        nama_sesi,
        jam_mulai,
        jam_selesai,
      });

      mutate("/api/sesi");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      onClose(); // Set loading state to false
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        {isLoading && <div className="loader">Loading...</div>}

        {!isLoading && (
          <>
            <div className="form-group">
              <Input
                id="nama_sesi"
                label="Nama Sesi"
                errors={errors}
                register={{ ...register("nama_sesi") }}
                defaultValue={data?.nama_sesi ?? ""}
              />
              <Input
                id="jam_mulai"
                label="Jam Mulai"
                errors={errors}
                register={{ ...register("jam_mulai") }}
                defaultValue={data?.jam_mulai ?? ""}
              />
              <Input
                id="jam_selesai"
                label="Jam Selesai"
                errors={errors}
                register={{ ...register("jam_selesai") }}
                defaultValue={data?.jam_selesai ?? ""}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Simpan
              </button>
            </div>
          </>
        )}
      </>
    </form>
  );
};

export default SesiEdit;
