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
                <p className=" text-center italic text-red-700 text-base font-semibold pb-4">
                    Copie du site PointExe dans une visée de démo pédagogique //
                    Copy of PointExe Website for demonstration purposes
                </p>
            </body>
        </html>
    );
}
