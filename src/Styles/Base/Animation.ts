import { keyframes } from "styled-components";

// Keyframes
export const Rotate = keyframes`
0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

// Framer animations
export const animate_slideUp = {
  variants: {
    hidden: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.7 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        // delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  },
  transition: {
    ease: "easeOut",
    duration: 0.6,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};
export const animateFadeOut = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  transition: { ease: "linear", duration: 0.4, delay: 0.002 },
};

export const animateSlideInRight = {
  variants: {
    hidden: { x: "100%" },
    visible: { x: 0 },
  },
  transition: { ease: "easeOut", duration: 0.4, delay: 0.08 },
};

export const animateSlideInTop = {
  variants: {
    hidden: { y: "-100%" },
    visible: { y: 0 },
  },
  transition: { ease: "easeOut", duration: 0.4, delay: 0.08 },
};
