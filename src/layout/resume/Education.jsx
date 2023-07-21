import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full md:w-[80%] py-12 flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#ff4777] tracking-[4px]">2003 - 2023</p>
          <h2 className="text-3xl mdl:text-4xl font-bold">Pendidikan</h2>
        </div>
        <div className="mt-10 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SDN 1 Sukamahi"
            subTitle="Sukamahi, Tasikmalaya (2003 - 2009)"
            // result="3.90/4"
            des="Sekolah ini terletak di Kp. Sukamahi Desa Sukamahi Kec. Sukaratu Kab. Tasikmalaya."
          />
          <ResumeCard
            title="SMPN 1 Sukaratu"
            subTitle="Sindanggalih, Tasikmalaya (2009 - 20012)"
            // result="4.75/5"
            des="Sekolah ini terletak di Kp. Sindanggalih Desa Sukagalih Kec. Sukaratu Kab. Tasikmalaya."
          />
          <ResumeCard
            title="SMKN 2 Tasikmalaya"
            subTitle="Cilolohan, Tasikmalaya (2012 - 2015)"
            // result="5.00/5"
            des="Sekolah ini terletak di Cilolohan Kota Tasikmalaya, disana saya mengambil jurusan TKJ (Teknik Komputer Jaringan)."
          />
          <ResumeCard
            title="Politeknik LP3I Tasikmalaya"
            subTitle="Jl. Ir. H. Juanda, Tasikmalaya (2020 - 2023)"
            // result="5.00/5"
            des="Kampus ini terletak di Jl. Ir. H. Juanda No.KM. 2, RW.No. 106, Panglayungan, Kec. Cipedes, Kab. Tasikmalaya, Jawa Barat 46151. untuk program studi yang saya ambil adalah Manajemen Informatika."
          />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
}

export default Education