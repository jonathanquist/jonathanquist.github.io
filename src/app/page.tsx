"use client";

export default function Page() {
  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  context.res.writeHead(302, {
    Location: "https://portfolio-alpha-rosy-36.vercel.app/about",
  });
  context.res.end();
  return { props: {} };
}
