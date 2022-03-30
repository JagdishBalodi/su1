// import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export class LengthValidator {
//     public static get Length(): ValidatorFn {

//         const validateLength = (control: AbstractControl): ValidationErrors | null => {
//             const inputData = <string>control.value
//             if (inputData.length < 8 || inputData.length > 15)
//                 return {
//                     lengtherror:
//                     {
//                         message: 'length should be between 8 and 15',
//                         status: true,
//                         maximumength: 15,
//                         minimumlength: 8,
//                         currentlength: inputData.length
//                     }
//                 }
//             else
//                 return null
//         }

//         return validateLength;
//     }
// }
