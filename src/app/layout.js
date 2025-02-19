import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
/* importar globals.css */
import "./globals.css";

export const metadata = {
  title: "Vasto",
  description: "Encuentra toda la información para invertir en Vasto Foods",
  icons: {
    icon: "/favicon.ico", // Ruta del favicon en `public/`
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
