import { SVGProps } from 'react';

export function IconPlaceholder(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="" fill="currentColor" />
    </svg>
  );
}
