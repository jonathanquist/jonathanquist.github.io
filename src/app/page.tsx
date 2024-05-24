"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://portfolio-alpha-rosy-36.vercel.app/about");
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}
