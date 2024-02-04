import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
import { relIcon } from "@/constants";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href={relIcon} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Star Platinum Auth</title>
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
