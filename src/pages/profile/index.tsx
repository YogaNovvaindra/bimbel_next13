import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Button from "../components/buttons/Button";
import { MdModeEdit } from "react-icons/md";
import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "Bimbel Linear";
  });
  return (
    <div className="flex flex-row h-screen font-mulish">
      <Sidebar />
      <div className=" w-full flex flex-col">
        <div className="flex flex-col h-full">
          <Navbar />
          <div className="h-full bg-Neutral-95 relative">
            <div className="w-full h-1/2 bg-gradient-to-br from-Tertiary-50 to-Primary-50">
              <div className="absolute h-full flex items-center justify-center w-full">
                <div className="flex gap-20 w-max bg-Neutral-100 relative shadow-[0px_0px_6px_1px_rgba(0,0,0,.2)] p-20 rounded-lg">
                  <div className="flex flex-col gap-6 w-max items-center">
                    <div className="h-72 w-60 rounded-lg ring-[8px] ring-Neutral-100 ">
                      <Image
                        src="https://img.jakpost.net/c/2017/02/15/2017_02_15_21637_1487139254._large.jpg"
                        alt="Foto profile"
                        width={100}
                        height={100}
                        className="rounded-lg w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-center w-full">
                      <h1 className="font-bold text-Primary-10 text-lg">
                        Agimul Karim
                      </h1>
                      <h2 className="inline-block py-2 py-2 px-4 bg-Primary-50 text-Primary-10 rounded-full font-semibold w-full text-center">
                        Admin
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="h-full flex flex-col gap-5">
                      <h1 className="font-bold text-Primary-20 text-xl">
                        Detail Info
                      </h1>
                      <div className="flex gap-[120px]">
                        <div className="flex flex-col gap-5">
                          <div className="flex flex-col gap-1">
                            <h3 className="text-sm text-Neutral-30">Email</h3>
                            <span className="font-bold text-Primary-10">
                              agimulkarim@gmail.com
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-sm text-Neutral-30">
                              No WA/Telp
                            </h3>
                            <span className="font-bold text-Primary-10">
                              085123456789
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-sm text-Neutral-30">Alamat</h3>
                            <span className="font-bold text-Primary-10">
                              Kabupaten Pluto-Kecamatan Jupiter-Desa Saturnus
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5">
                          <div className="flex flex-col gap-1">
                            <h3 className="text-sm text-Neutral-30">Lulusan</h3>
                            <span className="font-bold text-Primary-10">
                              Universitas Gajah Mada
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-sm text-Neutral-30">
                              Mata Pelajaran
                            </h3>
                            <span className="font-bold text-Primary-10">
                              Matematika
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        bgColor="bg-Tertiary-50"
                        brColor=""
                        withBgColor
                        label="Edit Profile"
                        textColor="text-Neutral-100"
                        type={"button"}
                        icon={MdModeEdit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
