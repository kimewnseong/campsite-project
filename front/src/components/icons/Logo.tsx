import React from "react";
import styled from "styled-components";

const StyledLogo = styled.svg`
  & .fill-logo {
    fill: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
    transition: 0.3s fill;
  }
`;

const Logo = () => (
  <StyledLogo viewBox="0 0 160 50" fill="none">
    <g id="Group 120">
      <g id="Component 54">
        <rect
          id="Rectangle 118"
          width="23.0362"
          height="4.60856"
          transform="matrix(0.705111 -0.709097 -0.705111 -0.709097 21.1689 32.8384)"
          fill="#F3CA07"
        />
        <rect
          id="Rectangle 114"
          width="4.60856"
          height="18.4342"
          transform="matrix(0.705111 -0.709097 -0.705111 -0.709097 17.7471 41.314)"
          fill="#F28D52"
        />
        <rect
          id="Rectangle 116"
          width="4.60856"
          height="23.0428"
          transform="matrix(0.705111 -0.709097 -0.705111 -0.709097 34 31.4966)"
          fill="#F28D52"
        />
        <rect
          id="Rectangle 115"
          width="18.4342"
          height="4.60856"
          transform="matrix(0.705111 -0.709097 -0.705111 -0.709097 24.2393 41.3125)"
          fill="#F28D52"
        />
        <rect
          id="Rectangle 117"
          width="23.0428"
          height="4.60856"
          transform="matrix(0.705112 -0.709096 -0.705112 -0.709096 8.00293 31.4966)"
          fill="#F28D52"
        />
        <rect
          id="Rectangle 120"
          width="18.4342"
          height="4.60856"
          transform="matrix(0.705111 -0.709097 -0.705111 -0.709097 11.2529 16.3394)"
          fill="#F3CA07"
        />
        <rect
          id="Rectangle 125"
          width="21.4512"
          height="4.62042"
          transform="matrix(0.977908 -0.209036 0.206793 0.978385 0 42.5518)"
          fill="#8C452B"
        />
        <rect
          id="Rectangle 128"
          width="10.3839"
          height="4.60206"
          transform="matrix(0.497889 -0.867241 0.864802 0.502114 12.6797 47.686)"
          fill="#8C452B"
        />
        <rect
          id="Rectangle 129"
          width="10.3838"
          height="4.60205"
          transform="matrix(0.497887 0.867242 0.864801 -0.502116 20.0674 40.9946)"
          fill="#8C452B"
        />
        <rect
          id="Rectangle 127"
          width="21.4512"
          height="4.62042"
          transform="matrix(0.977908 0.209036 0.206793 -0.978385 20.0674 42.5889)"
          fill="#8C452B"
        />
        <rect
          id="Rectangle 119"
          width="4.60856"
          height="22.3818"
          transform="matrix(0.705112 -0.709096 -0.705112 -0.709096 20.5352 32.21)"
          fill="#F3CA07"
        />
      </g>
      <g id="MODAK">
        <path
          d="M48.06 38.488V14.332H50.94L58.86 35.824H58.968L66.888 14.332H69.84V38.488H67.86V16.852H67.824L59.76 38.488H57.924L49.896 16.852H49.824V38.488H48.06ZM84.4341 38.848C81.1941 38.848 78.6501 37.792 76.8021 35.68C74.9541 33.568 74.0301 30.568 74.0301 26.68V26.14C74.0301 22.3 74.9541 19.312 76.8021 17.176C78.6741 15.04 81.2421 13.972 84.5061 13.972C87.7221 13.972 90.2421 15.028 92.0661 17.14C93.9141 19.252 94.8381 22.252 94.8381 26.14V26.68C94.8381 30.496 93.9021 33.484 92.0301 35.644C90.1821 37.78 87.6501 38.848 84.4341 38.848ZM84.4701 37.192C87.1101 37.192 89.1501 36.292 90.5901 34.492C92.0301 32.668 92.7501 30.16 92.7501 26.968V26.14C92.7501 22.804 92.0421 20.224 90.6261 18.4C89.2341 16.576 87.1581 15.652 84.3981 15.628C81.7821 15.628 79.7421 16.528 78.2781 18.328C76.8381 20.128 76.1181 22.612 76.1181 25.78V26.644C76.1181 29.98 76.8141 32.572 78.2061 34.42C79.6221 36.268 81.7101 37.192 84.4701 37.192Z"
          fill="#F28D52"
        />
        <path
          d="M99.0104 38.488V14.332H105.706C113.362 14.332 117.19 18.208 117.19 25.96V26.5C117.19 34.492 113.374 38.488 105.742 38.488H99.0104ZM100.954 36.796H105.778C108.994 36.796 111.346 35.992 112.834 34.384C114.346 32.776 115.102 30.232 115.102 26.752V25.96C115.102 22.432 114.31 19.9 112.726 18.364C111.166 16.804 108.766 16.024 105.526 16.024H100.954V36.796ZM119.017 38.488L128.053 14.332H129.961L138.925 38.488H136.873L134.029 30.82H123.697L120.889 38.488H119.017ZM128.881 16.888L124.309 29.128H133.417L128.881 16.888ZM155.802 38.488L144.642 26.212L155.586 14.332H157.71L147.126 26.068L158.106 38.488H155.802ZM142.122 38.488V14.332H144.066V38.488H142.122Z"
          className="fill-logo"
        />
      </g>
    </g>
  </StyledLogo>
);
export default Logo;