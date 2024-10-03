import Link from "next/link";

import { socials } from "../data/datas";

export default function Social({ containerStyle, iconStyle }: any) {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyle}>
          {social.icon}
        </Link>
      ))}
    </div>
  )
}