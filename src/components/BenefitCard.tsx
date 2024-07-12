import { SelectedPage } from "@/assets/data";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: String;
  desc: String;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

export default function BenefitCard({
  icon,
  title,
  desc,
  setSelectedPage,
}: Props) {
  return (
    <motion.div 
        className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16"
        variants={childVariant}
        >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold text-center">{title}</h4>
      <p className="my-3 text-center">{desc}</p>
      <AnchorLink
        className="text-sm flex justify-center font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        Learn more
      </AnchorLink>
    </motion.div>
  );
}
