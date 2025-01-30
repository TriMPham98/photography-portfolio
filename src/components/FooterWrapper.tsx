"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterWrapper = () => {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return <Footer />;
};

export default FooterWrapper;
