import "./globals.css";
import Header from './components/Header';
import SmoothScroll from "./SmoothScroll.component";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <SmoothScroll> */}
        <Header />
        {children}
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}