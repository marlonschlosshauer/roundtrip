import React, { SVGProps } from "react";

export const Reload: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23 12C23 13.042 22.846 14.045 22.575 15H20.474C20.809 14.06 21 13.053 21 12C21 7.038 16.963 3 12 3C10.294 3 8.704 3.484 7.345 4.314L9.203 7H2.209L4.361 0L6.21 2.673C7.894 1.624 9.869 1 12 1C18.074 1 23 5.925 23 12ZM16.646 19.692C15.289 20.518 13.702 21 12 21C7.038 21 3 16.962 3 12C3 10.947 3.191 9.94 3.525 9H1.425C1.154 9.955 1 10.958 1 12C1 18.075 5.925 23 12 23C14.127 23 16.099 22.379 17.78 21.333L19.633 24L21.785 17.011H14.791L16.646 19.692Z"
      fill="currentColor"
    />
  </svg>
);
