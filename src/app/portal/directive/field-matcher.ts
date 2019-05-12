import { AbstractControl } from '@angular/forms';

export const fieldMatcher = (control: AbstractControl): { [key: string]: boolean } => {
    const password = control.get('password');
    const passwordAgain = control.get('passwordAgain');
    console.log('password' + passwordAgain.value);
    if (!password || !passwordAgain) {
        return null;
    }
    console.log(password.value === passwordAgain.value ? null : { nomatch: true });

    return password.value === passwordAgain.value ? null : { nomatch: true };
};
