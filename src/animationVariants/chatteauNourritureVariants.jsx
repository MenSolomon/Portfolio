export const parentVariant = {
  hidden: { scaleX: 1 },
  move: {
    listStyleType: "none",
    transition: {
      duration: 0.5,
    },
  },
};

export const coverPage2Move = {
  hidden: { x: -1500 },
  move: {
    x: [-1500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1500],

    transition: { delay: 0.5, duration: 1.7, type: "tween" },
  },
};

export const coverPage1Move = {
  hidden: { x: 0 },
  move: {
    x: [-1500, 0, 0, 0, 0, 0, 0, 0, -1500],

    transition: { duration: 2.7, type: "tween" },
  },
};

export const yoyoVariant = {
  hidden: {
    // width: "0vw",
  },

  move: {
    width: ["15vw", "0vw", "15vw"],
    transition: {
      repeat: Infinity,
      // delay: 1,
      duration: 1.2,
      // type: "spring",
    },
  },
};

export const yoyoVariant2 = {
  hidden: {
    // width: "0vw",
  },

  move: {
    width: ["15vw", "0vw", "15vw"],
    transition: {
      repeat: Infinity,
      delay: 0.2,
      duration: 1.2,
      // type: "spring",
    },
  },
};

export const yoyoVariant3 = {
  hidden: {
    // width: "0vw",
  },

  move: {
    width: ["15vw", "0vw", "15vw"],
    transition: {
      repeat: Infinity,
      delay: 0.4,
      duration: 1.2,
      // type: "spring",
    },
  },
};

export const coverChatteauLogo = {
  hidden: {
    height: "36vh",
  },
  move: {
    height: "0vh",

    transition: {
      delay: 5.5,
      duration: 0.4,
      type: "tween",
      ease: "linear",
    },
  },
};

export const coverNextGenText = {
  hidden: {
    width: "23vw",
  },
  move: {
    width: "0vw",
    // transform: "rotateY(330deg)",

    transition: {
      delay: 5.5,
      duration: 0.4,
      type: "tween",
      ease: "linear",
    },
  },
};
