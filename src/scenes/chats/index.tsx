import React from "react";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Spense from "@/assets/Spense.png";
import YelpCamp from "@/assets/YelpCamp.png";
import { SelectedPage } from "@/shared/type";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Charts = ({ setSelectedPage }: Props) => {
  return (
    <section id="chats" className="  gap-16 bg-black-20 ">
      <div className="w-full bg-black-20 py-10">
        <div className="mx-auto w-5/6">
          <div className="flex flex-wrap items-center justify-center gap-1 md:justify-between ">
            <motion.div
              className="mt-8 flex w-[600px] flex-col gap-8 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img src={Spense} alt="" />
              <div>
                <HText>Spense.com</HText>
              </div>
              <p>
                Rething the way writers get paid, an open-source platform
                designed to help writers focus more on writing, and less on when
                and how they`ll get paid. Project in collaboration with
                Codewell.cc
              </p>
            </motion.div>
            <motion.div
              className="mt-8 flex w-[600px] flex-col gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img src={YelpCamp} alt="" />
              <div>
                <HText>YelpCamp.com</HText>
              </div>
              <p>
                Allowing backpack travelers to perfectly plan their trip through
                an open-source platform similar to TripAdvisor. With over 1m
                MAU, YelpCamp has been the crowd`s favorite in 2021
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charts;
