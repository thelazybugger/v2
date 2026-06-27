import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" pt-20 px-4 bg-[]">
      <footer className=" w-full glass border-t border-r  border-white/10 shadow-2xl max-w-[1350px] mx-auto text-white pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
          <div className="lg:col-span-3 space-y-6">
            <a href="#" className="block">
              <img src="/assets/Manova.png" alt="Manova Softs" className="h-15 w-auto" />
            </a>
            <p className="text-sm/6 text-neutral-300 max-w-96">
              Manova Softs creates premium digital products with reliable
              delivery, polished visuals, and measurable business impact.
            </p>
            <div className="flex gap-5 md:gap-6 order-1 md:order-2">
              <a
                href="http://linkedin.com/company/manovasofts/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300"
                aria-label="Twitter"
              >
                <TwitterIcon className="size-5" />
              </a>
              <a
                href="https://github.com/Manova-Softs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="GitHub"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300"
                aria-label="Dribbble"
              >
                <DribbbleIcon className="size-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
            <div>
              <h3 className="font-medium text-sm mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li>
                  <Link to="/about" className="hover:text-neutral-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-neutral-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-neutral-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-sm mb-4">Services</h3>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li>
                  <Link to="/services" className="hover:text-neutral-400">
                    Web & App
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-neutral-400">
                    SaaS Development
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-neutral-400">
                    AI Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-sm mb-4">Legal</h3>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li>
                  <Link to="/privacy" className="hover:text-neutral-400">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-neutral-400">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="hover:text-neutral-400">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-700 flex justify-between items-center">
          <p className="text-neutral-400 text-sm">
            Copyright © 2026 Manova Softs.
          </p>
          <p className="text-sm text-neutral-400">All right reserved.</p>
        </div>
        <div className="relative">
          <div className="absolute  inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-black rounded-full blur-[170px] pointer-events-none" />
          <h3 className="text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,15vw,15rem)] [-webkit-text-stroke:1px_#FFFF] mt-6">
            Manova
          </h3>
        </div>
      </footer>
    </div>
  );
}
