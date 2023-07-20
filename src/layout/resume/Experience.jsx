import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full md:w-[80%] py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#ff4777] tracking-[4px]">2014 - 2023</p>
          <h2 className="text-3xl mdl:text-4xl font-bold">Pengalaman Kerja</h2>
        </div>
        <div className="mt-14 w-full h-[1500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="COMBLABS USDI ITB"
            subTitle="IT Support - (Selama 3 Bulan pada Tahun 2014)"
            result="USA"
            des="Membantu Staff IT melakukan pengecekan hardware dan software pada perangkat yang akan digunakan di lab secara berkala."
          />
          <ResumeCard
            title="PT. TMMIN (Toyota Motor Manufacturing Indonesia)"
            subTitle="Warehouse Operator - (2016 - 2018)"
            result="MALAYSIA"
            des="Melakukan proses loading dan unloading barang dari supplier, 
            memeriksa kualitas barang dan melakukan pengecekan stok di gudang, 
            melakukan pengiriman barang kebagian produksi untuk mensupport proses produksi mobil."
          />
          <ResumeCard
            title="PT. TD Automotive Compressor Indonesia"
            subTitle="Assembly Operator - (2018 - 2020)"
            result="MALAYSIA"
            des="Melakukan proses loading dan unloading barang dari logistik untuk dikirimkan kebagian perakitan compressor ac mobil.
            Melakukan proses pengecekan presure dan kualitas kompressor setelah dirakit."
          />
          <ResumeCard
            title="Kawanina Project (Wedding Organizer)"
            subTitle="Supporting Wedding - (September 2020 - Juni 2021)"
            result="Oman"
            des="Memabntu client dalam perencanaan dan persiapan sebelum acara pernikahan, dan membantu kelancaran acara perniakahan client ketika pernikahan dilaksanakan."
          />
          <ResumeCard
            title="SMKN 1 Ciamis"
            subTitle="Programmer dan System Analist - (September 2022 - November 2022)"
            result="Oman"
            des="Membuat aplikasi untuk kebutuhan pencatatan tamu dan pembuatan surat izin guru dan siswa untuk bagian resepsionis."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
