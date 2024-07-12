import { SelectedPage } from "@/assets/data";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: String;
  desc: String;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function BenefitCard({
  icon,
  title,
  desc,
  setSelectedPage,
}: Props) {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16">
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
    </div>
  );
}
