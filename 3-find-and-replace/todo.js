/*
 *
 * ❗ This file explains the use-cases for regex and ability to use it in VSCode's find and replace. (Press "Ctrl + Shift + H" or "Ctrl + H", then "Alt + R" to enable regex mode)
 *
 */

/*
 * 1️⃣ Use-case: the way icons are imported was changed due to the change of a build tool (from create-react-app to vite) (+ add ?react)
 *
 * - first-step: \/assets.+\.svg (find) -> $0?react (replace) -> adding "?react" to the end of svg imports // ? reason: because of types, URLs, components that contain .svg in their name
 * - second-step: \{ ReactComponent as (.*) \} (find) -> $1 (replace) -> removing "ReactComponent as" and curly braces from the import statement
 *
 * 👆 Personal usage intensity: 4/10 🟧 (rarely, but crucial to know when needing to replace large amounts of code)
 *
 * // ? to check and experiment with regex groups in detail, go to https://regex101.com/
 *
 *
 */

import { ReactComponent as AskFidoIcon } from '@/assets/icons/chatbot/askFido.svg';
import { ReactComponent as MessageIcon } from '@/assets/icons/chatbot/message.svg';
import { ReactComponent as SubmitIcon } from '@/assets/icons/chatbot/submitIcon.svg';
import { ReactComponent as CheckIcon } from '@/assets/icons/check.svg';
import { ReactComponent as PencilIcon } from '@/assets/images/pencil.svg';
import { ReactComponent as AddCompanyIconSVG } from './Assets/add_company.AddCompanyIcon.svg';
import { ReactComponent as CompanyIconSVG } from './Assets/company.svg';
import projectIcon from './Assets/project.svg';
import addProjectIcon from './Assets/add_project.svg';
import PartnerIcon from './Assets/partner.svg';
import AddPartnerIcon from './Assets/add_partner.svg';
import AddUserIcon from './Assets/add_user.svg';
import ViewUserIcon from './Assets/users.svg';

/*
 *
 * 2️⃣ Additional use-case: replacing testing tool // ? to check regex groups in detail use: https://regex101.com/
 *
 * - "(^\s+)jest(\n.*?\.spyOn)" - "$1vi$2" (replace)
 * - "(^\s+)jest((\n.*?\.|\.)mock)" - "$1vi$2" (replace)
 *
 * 👆 Personal usage intensity: 4/10 🟧 (rarely, but crucial to know when needing to replace large amounts of code)
 *
 */

/*
 *
 * 3️⃣ Useful util commands
 *
 * - "(\/\/\s+console.log|console.log)\((.|\n)+?\);" -> find console.logs - to remove for example
 *
 * 👆 Personal usage intensity: 7/10 🟧 (often comes in handy)
 *
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
console.log('handleToggleDialog', { open });

// * Console.log example 4
console.log('usePartnersAndCompanies', {
  mappedPartnerAndCompanies,
  isCompanySuccess,
  isPartnerSuccess,
  filter: props.filterPartnerId,
});
