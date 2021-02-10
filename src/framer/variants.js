// Page transitions
const duration = 0.25
export const pageVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

// Product grid
export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

// Product cards
export const cardVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },

  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// Buttons
export const buttonVariants = {
  initial: {
    scale: 1,
  },
  heroBtnInitial: {
    scale: 0.01,
  },
  heroBtnAnimate: {
    scale: 1,
    transition: {
      delay: 1.25,
      duration: 0.75,
    },
  },
  hover: {
    scale: 1.015,
    backgroundColor: "#922178",
    boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.2)",
    transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
  },

  hoverNoScale: {
    backgroundColor: "#922178",
    boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.2)",
    transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
  },

  pressed: {
    scale: 0.95,
  },
}

// Images
export const imageVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.15 },
  },
}

// Single product page
export const singleProductVariants = {
  hiddenLeft: {
    opacity: 0,
    x: -100,
  },
  hiddenRight: {
    opacity: 0,
    x: 100,
  },
  hiddenBottom: {
    opacity: 0,
    x: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
}

// Hero container
export const heroContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 1,
    },
  },
}

// Hero items
export const heroVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}

//  Checkout loader
export const loaderVariants = {
  animation: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      // repeatType: "reverse",
      ease: "linear",
      duration: 3,
    },
  },
}

// Dog svg
export const dogVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: [0, 1, 1, 1, 1, 0, 1],
    transition: {
      duration: 1,
      delay: 2,
      repeat: Infinity,
      repeatDelay: 6,
    },
  },
}
