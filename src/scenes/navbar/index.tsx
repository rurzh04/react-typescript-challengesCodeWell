import React, { useState } from "react";
import { SelectedPage } from "@/shared/type";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "./Link";
import ActionButton from "@/shared/ActionButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
type Props = {
  selectedPage: string;
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [isMenuToggled, setMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex justify-between items-center";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-10`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <div>
              <h1 className=" font-prata text-white-20">Johnathan Specter</h1>
            </div>
            {isAboveMediumScreens ? (
              /* CENTER SIDE */
              <div className={`${flexBetween} w-8/12`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Articles"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Chats"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Awards"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* RIGTH SIDE  */}
                <ActionButton setSelectedPage={setSelectedPage}>
                  Get in touch
                </ActionButton>
              </div>
            ) : (
              <button
                className=" rounded-full"
                onClick={() => setMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-7 w-7 font-bold text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="button-0 fixed right-0 z-40 h-full w-[300px] bg-black-40 drop-shadow-xl">
          {/* Close Icon */}
          <div className="flex justify-end p-12 text-white-20">
            <button onClick={() => setMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-7 w-7" />
            </button>
          </div>
          <div className=" ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Articles"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Chats"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Awards"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
