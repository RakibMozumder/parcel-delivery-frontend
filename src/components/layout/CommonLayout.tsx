import Navbar from "./Navbar";
import Footer from "./Footer";
import type { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
  return (
    <div >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}