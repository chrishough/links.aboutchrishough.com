export default () => {
// This MUST! match SCSS: $grid-breakpoints
  Breakpoints({
    xs: {
      min: 0,
      max: 576,
    },
    sm: {
      min: 576,
      max: 768,
    },
    md: {
      min: 768,
      max: 992,
    },
    lg: {
      min: 992,
      max: 1200,
    },
    xl: {
      min: 1200,
      max: 2000,
    },
    xxl: {
      min: 2000,
      max: 2500,
    },
    xxxl: {
      min: 2500,
      max: Infinity,
    },
  });
};
