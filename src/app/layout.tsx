import { Nav } from "@/components/nav/nav";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
    title: "Coder100",
    description: "The personal website of Coder100",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={noto.className}>
                <Nav />
                {children}
            </body>
        </html>
    );
}
