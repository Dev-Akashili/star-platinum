import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box minH="calc(100vh - 95px)">
            <Navbar />
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
