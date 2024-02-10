import type { Metadata } from "next";
import "./globals.css";

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
                <div>{children}</div>
            </body>
        </html>
    );
}
