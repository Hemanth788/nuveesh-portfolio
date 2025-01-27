import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full gap-20 px-6 py-8 bg-transparent sm:px-14 md:px-20">
      <div className="flex flex-col w-full gap-8 p-8 mx-auto max-w-7xl rounded-2xl bg-accent text-background sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase rounded-full bg-background text-accent md:text-sm lg:text-base">
            Get in touch
          </span>
        </div>
        <a
          href={`mailto:${siteMetadata.email}`}
          target="_blank"
          className="mb-6 text-2xl font-bold text-center cursor-pointer sm:text-4xl lg:text-7xl"
        >
          <span>nuveesh31@gmail.com</span>
        </a>
        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>
    </footer>
  );
}
