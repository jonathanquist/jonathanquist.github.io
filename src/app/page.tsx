"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // check if code is running on client side
      router.push("https://portfolio-alpha-rosy-36.vercel.app/");
    }
  }, [router]);

  return (
    <div>
      <p className="font-caviar text-5xl">Redirecting...</p>
    </div>
  );
}
