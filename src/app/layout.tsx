import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/app/ui/navbar/Navbar";
import { Footer } from "./ui/footer/Footer";

export const metadata: Metadata = {
    title: "Clone PointExe",
    description: "Clone made for demonstration purposes",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body className="bg-background-dark">
                <Navbar />
                <div className=" md:p-6">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
