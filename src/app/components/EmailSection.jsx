import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 py-24 gap-4 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md font-normal">
          {" "}
          I&apos;m currently looking for my first web development job
          opportunities, my inbox is always open. Whether you have a question or
          just want to say hi, I&apos;ll try my best to get back to you ASAP!
        </p>
        <div className="socials flex flex-row gap-2 items-center">
          <Link href="https://github.com/tfan2437?tab=repositories">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ting-wei-fan-496669aa">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="mailto:tfan2437@gmail.com">
            <Image src={EmailIcon} width={44} height={44} alt="Email Me" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
