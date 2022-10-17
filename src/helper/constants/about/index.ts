import ContactsInfo from "./contacts";
import HobbiesInfo from "./hobbies";
import PersonalInfo from "./personal-info";
import ProfessionalInfo from "./professional-info";

export enum CONTENT_INDEX {
  PROFESSIONAL_INFO = 1,
  PERSONAL_INFO = 2,
  CONTACTS_INFO = 3,
  HOBBIES_INFO = 4,
}

export const ABOUT_CONTENT = {
  1: ProfessionalInfo,
  2: PersonalInfo,
  3: ContactsInfo,
  4: HobbiesInfo,
} as any;
