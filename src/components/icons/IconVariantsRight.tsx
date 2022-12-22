import { Svg, Path, SvgProps } from "react-native-svg";

export const IconVariantsRight = ({ ...rest }: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...rest}>
      <Path
        d="M5 12H19"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      />
      <Path
        d="M12 5L19 12L12 19"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      />
    </Svg>
  );
};
