import Image from "next/image";
import Heading from "./Heading";

const Footer = () => (
  <footer>
    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    &emsp;
    <Heading tag="h3" text="2021" />
  </footer>
);

export default Footer;
