import { useEffect, useState } from "react";

import { SelectedPage } from "./shared/type";
import Navbar from "./scenes/navbar";
import Articles from "./scenes/articles";
import Charts from "./scenes/chats";
import Awards from "./scenes/awards";
import About from "./scenes/about";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Articles
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Articles);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-black-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Articles setSelectedPage={setSelectedPage} />
      <Charts setSelectedPage={setSelectedPage} />
      <Awards setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
