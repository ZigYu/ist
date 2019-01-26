import posed, { PoseGroup } from 'react-pose';

export default PoseGroup;

export const createPosed = config => posed.div(config);

export const Fade = createPosed({
  enter: {
    opacity: 1,
    transition: { ease: 'linear', duration: 200 }
  },
  exit: {
    opacity: 0,
    transition: { ease: 'linear', duration: 200 }
  }
});

export const Appear = createPosed({
  enter: {
    scale: 1,
    transition: { duration: 500 }
  },
  exit: { scale: 0 }
});

export const Elevator = createPosed({
  initial: {
    y: '-100%'
  },
  enter: {
    y: '0%',
    transition: { duration: 500 }
  },
  exit: {
    y: '100%',
    transition: { duration: 500 }
  }
});

export const TopIn = createPosed({
  enter: {
    y: 0
  },
  exit: {
    y: -50
  }
});
