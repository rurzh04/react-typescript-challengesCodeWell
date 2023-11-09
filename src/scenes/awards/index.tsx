import React from "react";
import { SelectedPage } from "@/shared/type";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Awards = ({ setSelectedPage }: Props) => {
  return (
    <section id="awards" className="w-full gap-16 bg-black-40 py-10">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Awards)}>
        <div className="w-full py-10">
          <div className="mx-auto w-5/6">
            <div className="mt-8 flex flex-wrap items-center justify-center gap-1 md:justify-between">
              <motion.div
                className=" flex w-[600px] flex-col gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  A co-founder at one of the world`s largest communities
                </HText>
                <p>
                  The combined experience i have working at the top Fortune 500
                  companies has allowed me to developer a skillset that helps me
                  in not just development, but in every aspect on any business
                  <br />
                  <br />
                  <br />
                  I`m pround to announce that i am now working at one of the
                  world`s largest communities teaching younv minds about how to
                  sell yourself as a developer and opern them to a whole new
                  world of opportunities
                </p>
              </motion.div>
              <motion.div
                className="flex w-[600px] flex-col gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p>
                  As a developer, you have everything available to you and all
                  that`s holding you back yourself.
                  <br />
                  <br />
                  A quote i live by perfectly ililustrates what i mean
                  <br />
                  <br />
                  "How big would you dream, if you knew you wouldn`t fail?"
                  You`ve already gane through the hardest parts being, a in
                  something you`re passionate about.`
                  <br />
                  <br /> I`m happy to chat over coffee some time about how i i
                  vsn help
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;
