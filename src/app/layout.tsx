import "./globals.css";
import NavBar from "@/components/navBar";
import {
  Chivo,
  Albert_Sans,
  Zilla_Slab,
  Alfa_Slab_One,
} from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
  variable: "--chivo-font",
});
const albert = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "800"],
  variable: "--albert-sans-font",
});

const zilla = Zilla_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--zilla-slab-font",
});
const alfa = Alfa_Slab_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--alfa-slab-one-font",
});
export const metadata = {
  title: "UCR redefineD",
  description: "A website for redefined at UC Riverside",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${chivo.variable} ${albert.variable} ${zilla.variable} ${alfa.variable}`}
      >
        <NavBar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
