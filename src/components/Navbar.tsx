import Logo from "@/assets/images/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/assets/data";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Navbar({ selectedPage, setSelectedPage }: Props) {
  return (
    <nav>
      <div className="flex justify-between items-center fixed top-0 z-30 py-6 w-full bg-white">
        <div className="flex justify-between items-center mx-auto w-5/6">
          <div className="flex justify-between items-center w-full gap-16">
            <div>
              <img src={Logo} alt="logo" />
            </div>
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
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
