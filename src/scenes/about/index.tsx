import React from "react";
import { SelectedPage } from "@/shared/type";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="w-full gap-16">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        <div className="w-full bg-black-20 py-10">
          <div className="mx-auto w-5/6">
            <div className="mt-8  grid   flex-row gap-3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>Interested in working with me?</HText>
              </motion.div>
              <motion.div
                className="w-full md:w-5/12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="mb-4">
                  I`m active on all social media platforms listed below, but you
                  can also me an email and i will get back to you within 24-28
                  hours.
                </p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Get in touch
                </ActionButton>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
