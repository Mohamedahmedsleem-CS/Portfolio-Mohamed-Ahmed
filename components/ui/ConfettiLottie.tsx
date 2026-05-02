"use client";

import Lottie from "lottie-react";

export type ConfettiLottieProps = {
  animationData: object;
  loop: boolean;
  autoplay: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function ConfettiLottie({
  animationData,
  loop,
  autoplay,
  className,
  style,
}: ConfettiLottieProps) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={style}
      rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
    />
  );
}
