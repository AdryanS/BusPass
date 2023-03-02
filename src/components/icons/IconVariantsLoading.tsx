import { Svg, Path, SvgProps } from "react-native-svg";

import React from "react";

export const IconVariantsLoading = ({ ...rest }: SvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <Path
        d="M12 2V6"
        stroke="#323849"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      />
      <Path
        d="M12 18V22"
        stroke="#323849"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      />
      <Path
        d="M4.92969 4.93005L7.75969 7.76005"
        stroke="#323849"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      />
      <Path
        d="M16.2402 16.24L19.0702 19.07"
        stroke="#323849"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}

      />
      <Path
        d="M2 12H6"
        stroke="#323849"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}

      />
      <Path
        d="M18 12H22"
        stroke="#323849"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}

      />
      <Path
        d="M4.92969 19.07L7.75969 16.24"
        stroke="#323849"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}

      />
      <Path
        d="M16.2402 7.76005L19.0702 4.93005"
        stroke="#323849"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}

      />
    </Svg>
  );
};