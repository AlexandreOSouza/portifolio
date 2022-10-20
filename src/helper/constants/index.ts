export const PAGE_URL = {
  1: "home",
  2: "about",
  3: "projects",
  4: "contact",
};

export const PAGE_INDEX = {
  HOME: 1,
  ABOUT: 2,
  PROJECTS: 3,
  CONTACT: 4,
};

export const ABOUT_INDEX = {
  PROFESSIONAL: 1,
  PERSONAL: 2,
  HOBBIES: 3,
};

export const PAGE_TITLE = {
  HOME: "alesouza.dev | Home",
  ABOUT: "alesouza.dev | About-me",
  PROJECTS: "alesouza.dev | Projects",
  CONTACT: "alesouza.dev | Contact-me",
};

export type STEP_TYPE = 1 | 2 | 3 | 4;

export const FEEDBACK_STEPS = {
  INITIAL_STEP: 1 as STEP_TYPE,
  BUG_STEP: 2 as STEP_TYPE,
  IDEA_STEP: 3 as STEP_TYPE,
  OTHER_STEP: 4 as STEP_TYPE,
};

export const FEEDBACK_TITLE = {
  1: "Send Your Feedback",
  2: "Bug",
  3: "Idea",
  4: "Other",
};
