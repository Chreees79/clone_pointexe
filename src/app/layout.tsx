import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/ui/navbar/Navbar";

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
            <body className="bg-background-dark p-1 md:p-6">
                <Navbar />
                <div>{children}</div>
            </body>
        </html>
    );
}
