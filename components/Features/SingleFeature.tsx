import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, description } = feature;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -10,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative animate_top z-40 rounded-lg border border-white bg-white shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark"
      style={{ aspectRatio: '1.5 / 2' }}
    >
      <div className="relative w-full h-full overflow-hidden group">
        <div className="absolute inset-0 z-10 transition-transform duration-500 group-hover:translate-x-[-100%]">
          <Image src={icon} layout="fill" objectFit="cover" alt="Feature icon" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4 transition-transform duration-500 translate-x-[100%] group-hover:translate-x-0">
          <p className="text-center text-white text-4xl font-[impact]">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleFeature;