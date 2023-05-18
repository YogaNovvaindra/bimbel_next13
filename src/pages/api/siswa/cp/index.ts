import fs from 'fs-extra';
import { NextApiResponse, NextApiRequest } from 'next';
import path from 'path';

export default async function copyFile(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, password, role, nomor_telepon, alamat, image, universitas, mapel_id } = req.body;

    if (req.method === "POST") {

  const sourcePath = path.join(process.cwd(), "/public/img/siswa/default.jpg");
    const destinationPath = path.join(process.cwd(), "/public/img/siswa/default.jpg");
    const newFileName = name + ".jpg";
    console.log(destinationPath);

  try {
    const destinationDir = path.dirname(destinationPath);
    const newFilePath = path.join(destinationDir, newFileName);
    console.log(newFilePath);

    await fs.copy(sourcePath, newFilePath);
    return res.status(200).json({ message: 'File copied successfully.' });
  } catch (error) {
    console.error('Error copying file', error);
    return res.status(500).json({ error: 'Error copying file.' });
  }
}
}
