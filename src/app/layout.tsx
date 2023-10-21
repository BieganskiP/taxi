import "@/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "TAXI MINI SERCE WAŁBRZYCH",
  description:
    "Zaufany i niedrogi serwis taksówkowy w Wałbrzychu. Szybki dojazd, profesjonalni kierowcy. Zamów taksówkę online lub zadzwoń już teraz!",
  keywords:
    "Taksówka Wałbrzych, Taxi Wałbrzych, Niedrogi taxi, Szybki dojazd, Taksówki w Wałbrzychu, Taxi online Wałbrzych, Zamów taxi, Profesjonalni kierowcy, Taksówka na lotnisko, Taksówka dla firm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="text-primary">
        <Header />
        {children}
      </body>
    </html>
  );
}
