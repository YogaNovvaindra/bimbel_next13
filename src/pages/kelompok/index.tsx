import Link from 'next/link'
import React from 'react'
import { GetServerSideProps } from 'next';
import prisma from '@/libs/prismadb';

interface Kelompok {
    program: any;
    jadwal: any;
    id: string;
    nama_kelompok: string;
    nama_program: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
}

interface Props {
    kelompok: Kelompok[];
}


const Kelompok: React.FC<Props> = ({ kelompok }) => {

    return (
        <div>
            <h1 className="font-bold text-4xl my-10">List Kelompok</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nama Kelompok</th>
                        <th>program</th>
                        <th>jadwal</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {kelompok.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nama_kelompok}</td>
                            <td>{item.program.nama_program}</td>
                            <td>{item.jadwal.nama}</td>
                            <td>{item.createdAt.toString()}</td>
                            <td>{item.updatedAt.toString()}</td>
                            <td>
                                <Link
                                    href={`/pengaturan/kelompok/edit/${item.id}`}
                                >
                                    <button
                                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                                    >
                                        edit
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link
                href="/pengaturan"
            >
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    kembali
                </button>
            </Link>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {

    // buatjoin dari table kelompok dan kelas
    const kelompok = await prisma.kelompok.findMany({
        select: {
            id: true,
            nama_kelompok: true,
            program: {
                select: {
                    nama_program: true
                }
            },
            jadwal: {
                select: {
                    nama: true,
                }
            },
            createdAt: true,
            updatedAt: true
        }
    });

    const serializedMapel = kelompok.map((item) => ({
        ...item,
        createdAt: item.createdAt.toString(),
        updatedAt: item.updatedAt.toString()
    }));

    return {
        props: {
            kelompok: serializedMapel
        }
    }
}

export default Kelompok
