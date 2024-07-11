import { SelectedPage } from "@/assets/data";
import useMediaQuery from "@/hooks/useMediaQuery";
import PrimaryBtn from "@/components/PrimaryBtn";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import HomePageText from "@/assets/images/HomePageText.png";
import HomePageGraphic from "@/assets/images/HomePageGraphic.png";
import SponserRedBull from "@/assets/images/SponsorRedBull.png";
import SponserFortune from "@/assets/images/SponsorFortune.png";
import SponserForbes from "@/assets/images/SponsorForbes.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 ">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          <motion.div className="mt-8 flex items-center gap-8">
            <PrimaryBtn setSelectedPage={setSelectedPage}>Join now</PrimaryBtn>
            <AnchorLink 
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}>
              <p>Learn more</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="" />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponserRedBull} alt="" />
              <img src={SponserForbes} alt="" />
              <img src={SponserFortune} alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
