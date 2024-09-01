import { stagger } from "framer-motion";

export const slideIn = (direction: string, delay:any) => {
    return {
      hidden: {
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: stagger,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };