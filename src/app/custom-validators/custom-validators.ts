import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
    static shouldNotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf('') > -1) {
            return { shouldNotContainSpace: true }
        }
        return null;
    }

    static shouldBeUniqueUsername(control:AbstractControl): Promise<ValidationErrors|null> | Observable<ValidationErrors|null>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if((control.value as string) == 'asraf'){
                    resolve({shouldBeUniqueUsername:true})
                }else{
                    resolve(null)
                }
            },1000);
        })
    }

}