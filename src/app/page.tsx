"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // check if code is running on client side
      router.push("https://portfolio-alpha-rosy-36.vercel.app/about");
    }
  }, [router]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}
