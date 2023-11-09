import React from "react";
import { SelectedPage } from "./type";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (valid: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className=" bg-yellow-400 px-6 py-2  text-black-40 "
      href={`#${SelectedPage.About}`}
      onClick={() => setSelectedPage(SelectedPage.About)}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
