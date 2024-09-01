export const fadeIn = (direction: string, delay: any) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down',
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right',
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };