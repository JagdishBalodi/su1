import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
export class PasswordValidator
{
    public static get Digit():ValidatorFn
    {
        const validateDigit= (control:AbstractControl):ValidationErrors|null =>
        {
            const inputData = <string>control.value;
            let doesDigitExist = false;
            for (let index = 0; index < inputData.length; index++) 
            {
                if(inputData[index] >= '0' && inputData[index]<='9')
                {
                    doesDigitExist=true
                    break;
                }  
            }
            if(doesDigitExist)
            {
                return null;
            }
            else
            {
                return  { digitError:{ message:'must contain atleast one digit',status:true }}
            }

        }
        return validateDigit;
    }

    public static get Length() : ValidatorFn
    {
        const validateLength= (control:AbstractControl): ValidationErrors | null =>
        {
            const inputData =<string>control.value;
            if(inputData.length<6 || inputData.length>12)
            {
                return {
                        lengtherror:  
                        {
                            message:'length must be between 6 and 12',
                            status: true,
                            minimumlength:6,
                            mximumlength:12,
                            currentlength:inputData.length
                        }
                        }
            }
            else
            {
                return null;
            }
        }
        return validateLength
    }

    public static get LowerCase() :ValidatorFn
    {
        const validateLowerCase=(control:AbstractControl):ValidationErrors|null =>
        {
            const inputdata = <string>control.value;
            let doesLowerCaseExist = false;
            for (let index = 0; index < inputdata.length; index++)
            {
                const character = inputdata[index];
                if(character>='a' && character<='z')
                {
                    doesLowerCaseExist=true;
                    break;
                }
            }
     
            if(doesLowerCaseExist)
            {
            return null;
            }

            else
            {
                return {noLowerCase :{message: 'no lower case character found', status:true}}
            } 
    
    
        }
        return validateLowerCase;
    }

    public static get SpacialCharacter():ValidatorFn
    {
        const validateSpacialCharacter =(control:AbstractControl):ValidationErrors|null=>
        {
            let hasSpacialCharacter = false;
            const inputData= <string>control.value;
            var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            for (let index = 0; index < inputData.length; index++) {
                const element = inputData[index];
                if(format.test(element))
                {
                     hasSpacialCharacter= true;
                     break;
                } 
            }
            if(!hasSpacialCharacter)
            {
                return {spacialCharacterError:'must contain atleast one spacial character'};
            }
            else
            {
                return null;
            }
        
        }
        return validateSpacialCharacter;
    }

    public static get UpperCase() :ValidatorFn
    {
        const validateUpperCase=(control:AbstractControl):ValidationErrors|null =>
        {
            const inputdata = <string>control.value;
            let doesUpperCaseExist = false;
            for (let index = 0; index < inputdata.length; index++)
            {
                const character = inputdata[index];
                if(character>='A' && character<='Z')
                {
                    doesUpperCaseExist=true;
                    break;
                }
            }
     
            if(doesUpperCaseExist)
            {
            return null;
            }

            else
            {
                return {noUpperCase :{message: 'no upper case character found', status:true}}
            } 
    
    
        }
        return validateUpperCase;
    }
}