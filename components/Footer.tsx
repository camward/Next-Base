import { FC } from "react";
import Heading from "./Heading";

const Footer: FC = () => (
  <footer>
    <Heading
      tag="h3"
      text={`Next.js Application, ${new Date().getFullYear()}`}
    />
  </footer>
);

export default Footer;
