import {
	SiGmail,
	SiGithub,
	SiTwitter,
	SiLinkedin,
	SiWhatsapp,
	SiTelegram,
} from "react-icons/si";

import { FaPhone } from "react-icons/fa";



const contacts = [
  {
    icon: <SiGmail />,
    value: (
      <a href="mailto://lazarusgabriel000@gmail.com">lazarusgabriel000@gmail.com</a>
    ),
  },
  {
    icon: <SiGithub />,
    value: <a href="https://github.com/Ochaworldwide">github.com/Ochaworldwide </a>,
  },
  {
    icon: <SiTwitter />,
    value: <a href="https://twitter.com/iam_westempire">iam_westempire</a>,
  },
  {
    icon: <SiLinkedin />,
    value: (
      <a href="https://www.linkedin.com/in/gabriel-lazarus/">Lazarus Gabriel</a>
    ),
  },
  { icon: <SiTelegram />, value: "@westempiretech" },
  { icon: <SiWhatsapp />, value: "+234 8141233346" },
  { icon: <FaPhone />, value: "+234 9034962596" },
];

export default contacts;