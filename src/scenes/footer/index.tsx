import React from "react";

import Github from "@/assets/Social Icons/Github.svg";
import LinkedIn from "@/assets/Social Icons/LinkedIn.svg";
import Twitter from "@/assets/Social Icons/Twitter.svg";

const Footer = () => {
  return (
    <footer className=" bg-black-40 py-8">
      <div className="mx-auto flex w-5/6 justify-between">
        <h1 className="font-prata text-white-20">Johnathan Specter</h1>
        <div className="flex justify-center gap-3">
          <img src={Twitter} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Github} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
