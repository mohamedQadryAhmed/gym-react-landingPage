import Logo from "@/assets/images/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/assets/data";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import PrimaryBtn from "./PrimaryBtn";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Navbar({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) {
  const isAboveMediaScreans = useMediaQuery("(min-width : 1060px)");
  const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div className={`${navbarBackground} flex justify-between items-center fixed top-0 z-30 py-6 w-full bg-white`}>
        <div className="flex justify-between items-center mx-auto w-5/6">
          <div className="flex justify-between items-center w-full gap-16">
            <div>
              <img src={Logo} alt="logo" />
            </div>

            {isAboveMediaScreans ? (
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-between items-center gap-8 text-sm">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex justify-between items-center gap-8">
                <p>Sign in</p>
                <PrimaryBtn setSelectedPage={setSelectedPage}>Become a Member</PrimaryBtn>
              </div>
            </div>
            ): (
                <button className="rounded-full bg-secondary-500 p-2"
                onClick={() => setisMenuOpen(!isMenuOpen)}>
                    <Bars3Icon className="h-6 w-6 text-white" />
                </button>
            )
            }
          </div>
        </div>
      </div>
      {/* MOBILE NAV  */}
      {!isAboveMediaScreans && isMenuOpen && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            <div className="flex justify-end p-12">
                <button onClick={() => setisMenuOpen(!isMenuOpen)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
                </button>
            </div>
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <p>Sign in</p>
              </div>
              <div className="m-10">
              
              <PrimaryBtn setSelectedPage={setSelectedPage}>Become a Member</PrimaryBtn>
              </div>
        </div>
      ) }
    </nav>
  );
}
