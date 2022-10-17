import ProfessionalInfo from "./professional-info";

export enum CONTENT_INDEX {
  PROFESSIONAL_INFO = 1,
  PERSONAL_INFO = 2,
  CONTACTS_INFO = 3,
  HOBBIES_INFO = 4,
}

export const ABOUT_CONTENT = {
  1: ProfessionalInfo,
} as any;

export const ABOUT_TAB_TITLE = {
  1: "index",
} as any;
