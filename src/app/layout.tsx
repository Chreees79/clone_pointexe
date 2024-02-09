import type { Metadata } from "next";

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
            <body>{children}</body>
        </html>
    );
}
