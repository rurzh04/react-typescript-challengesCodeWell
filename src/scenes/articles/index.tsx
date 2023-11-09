import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/type";
import { motion } from "framer-motion";

import Walmart from "@/assets/Logos/Walmart.svg";
import JPMorgan from "@/assets/Logos/JP Morgan.svg";
import Visa from "@/assets/Logos/Visa.svg";
import Tinder from "@/assets/Logos/Tinder.svg";
import Samsung from "@/assets/Logos/Samsung.svg";
import Verizon from "@/assets/Logos/Verizon.svg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Articles = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="articles" className=" gap-16 py-10 md:h-full ">
      <div className="mx-auto w-5/6 items-center justify-start md:flex md:h-5/6">
        {/* Main Header  md:basis-[70%]*/}
        <div className="z-10 mt-20 md:mt-60  md:basis-[60%]">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className=" text-[30px] leading-tight text-white md:text-6xl">
              Helping companies build better, scalable software.
            </h1>

            {/* Text */}
            <p className="text-1xl mt-4 w-[80%] font-medium">
              Award-winning web developer and author, with over 15+ years of
              working experience with Fortune 500 companies like Apple, Google,
              Facebook, and more.
            </p>
          </motion.div>
        </div>
      </div>
      {/* SPONSOR */}
      <div className=" w-full bg-black-20 py-10">
        <div className="mx-auto w-5/6 truncate">
          <div className="flex  w-full flex-wrap items-center justify-between gap-8">
            <img src={Walmart} alt="Walmart" />
            <img src={JPMorgan} alt="JPMorgan" />
            <img src={Visa} alt="Visa" />
            <img src={Tinder} alt="Tinder" />
            <img src={Samsung} alt="Samsung" />
            <img src={Verizon} alt="Verizon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
