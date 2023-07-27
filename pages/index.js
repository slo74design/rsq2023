import Image from "next/image";

import PublicLayout from "@/layouts/PublicLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <PublicLayout>
            <h1>Remote</h1>
        </PublicLayout>
    );
}
