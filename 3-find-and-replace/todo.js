/*
 * Use-case: icons import change due to change of a build tool (e.g. from create-react-app to vite) (+ add ?react) 
 *
 * - first-step: \/assets.+\.svg (find) -> $0?react (replace) // ? reason: because of types, URLs, components that contain .svg in their name
 * - second-step: \{ ReactComponent as (.*) \} (find) -> $1 (replace)
 * 
 */

import AskFidoIcon from '@/assets/icons/chatbot/askFido.svg';
import MessageIcon from '@/assets/icons/chatbot/message.svg';
import SubmitIcon from '@/assets/icons/chatbot/submitIcon.svg';
import CheckIcon from '@/assets/icons/check.svg';
import PencilIcon from '@/assets/images/pencil.svg';
import AddCompanyIconSVG from './Assets/add_company.AddCompanyIcon.svg';
import CompanyIconSVG from './Assets/company.svg';
import projectIcon from './Assets/project.svg';
import addProjectIcon from './Assets/add_project.svg';
import PartnerIcon from './Assets/partner.svg';
import AddPartnerIcon from './Assets/add_partner.svg';
import AddUserIcon from './Assets/add_user.svg';
import ViewUserIcon from './Assets/users.svg';

/*
 *
 * Additional use-case: replacing testing tool // ? to check regex groups in detail use: https://regex101.com/
 * 
 * - "(^\s+)jest(\n.*?\.spyOn)" - "$1vi$2" (replace)
 * - "(^\s+)jest((\n.*?\.|\.)mock)" - "$1vi$2" (replace)
 */

/*
 *
 * Useful util commands
 * 
 * - "(\/\/\s+console.log|console.log)\((.|\n)+?\);" (find console.logs - to remove for example) 
 */


// * Console.log example 1

// console.log("increment file index", {
//   body,
//   createdColumns,
//   selectedValues,
//   fileIndex,
//   currentStep,
//   updatedErrors,
//   mappedSystemFields
// });

// * Console.log example 2
// console.log("error 3");

// * Console.log example 3
console.log("handleToggleDialog", { open });

// * Console.log example 4
console.log("usePartnersAndCompanies", {
  mappedPartnerAndCompanies,
  isCompanySuccess,
  isPartnerSuccess,
  filter: props.filterPartnerId
});
