'use client'

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";

export default function Home() {
  return (
<div className="overflow-clip inset-0 -z-10 h-screen w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
  <Element 
  name="top"
  className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
  xl:w-4/5 2xl:w-[68%] bg-white flex items-center
  justify-between py-6 px-4 md:px-8 mx-6"
  >
    <Link href="/">
    <Image
    src={'/logo/logo.webp'}
    alt="Sed Marketing"
    width={1000}
    height={1000}
    className="w-28"
    />
    </Link>
  </Element>
</div>
  );
}
