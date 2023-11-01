import { TStep } from "layouts/Story";
import { useSpring, useTransition } from "react-spring";
import { easings } from "@react-spring/web";

const useReactSpring = {
  useFunnelTransition: (step: TStep) =>
    useTransition(step, {
      from: { opacity: 0, transform: "translate3d(1000vw, 0, 0)" },
      enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
      leave: { opacity: 0, transform: "translate3d(-20vw, 0, 0)" },
      exitBeforeEnter: true,
    }),
  useRaining: () =>
    useSpring(() => ({
      loop: true,
      from: { y: -400 },
      to: { y: 100 },
      delay: 500,
      config: {
        easing: easings.easeInBack,
        velocity: 0.005,
        friction: 60,
        tension: 280,
      },
    })),
  useMovingHorizontal: () =>
    useSpring(() => ({
      loop: { reverse: true },
      from: { x: -100 },
      to: { x: 100 },
      config: {
        easing: [easings.easeInElastic, easings.easeOutElastic],
        velocity: 0.005,
        friction: 120,
        tension: 280,
      },
    })),
  useShaking: () =>
    useSpring(
      () => ({
        loop: { reverse: open },
        from: { factor: 10, opacity: 0.5, scale: 0.9, translateY: 0 },
        enter: { translateY: 5 },
        to: { factor: 150, opacity: 1, scale: 1, translateY: 0 },
        config: { duration: 2000 },
      }),
      [open]
    ),
};

export default useReactSpring;
