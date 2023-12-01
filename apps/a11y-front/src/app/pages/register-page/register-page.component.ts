import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Auth, createUserWithEmailAndPassword} from "@angular/fire/auth";
import {catchError, from, NEVER, take} from "rxjs";
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";

export class RegisterModel {
  constructor(public password: string, public confirmPassword: string, public email: string) {
  }


}

@Component({
  selector: 'a11y-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})

export class RegisterPageComponent {
  data: RegisterModel = new RegisterModel('', '', '');
  isPasswordFocused = false;
  auth = inject(Auth);

  checkLowerCaseRule(password: string): 'valid' | 'invalid' {

    const regex = new RegExp('[a-z]');
    return regex.test(password) ? 'valid': 'invalid';
  }
  checkUpperCaseRule(password: string): 'valid' | 'invalid' {

    const regexUp = new RegExp('[A-Z]');
    return regexUp.test(password) ? 'valid': 'invalid';
  }
  checkNumberRule(password: string): 'valid' | 'invalid' {

    const regexNum = new RegExp('[0-9]');
    return regexNum.test(password) ? 'valid': 'invalid';
  }
  checkLengthRule(password: string): 'valid' | 'invalid' {


    const regexNum = new RegExp(/^.{8,}$/);
    return regexNum.test(password) ? 'valid': 'invalid';
  }
  checkMaxLengthRule(password: string): 'valid' | 'invalid' {


    const regexNum = new RegExp(/^.{0,12}$/);
    return regexNum.test(password) ? 'valid': 'invalid';
  }

  checkSpecialCharacterRule(password: string): 'valid' | 'invalid' {


    const regexNum = new RegExp(/[\W_]/g);
    return regexNum.test(password) ? 'valid': 'invalid';
  }
  checkPasswordMatchRule(password: string, confirmpassword : string): 'valid' | 'invalid' {

    return password !== confirmpassword ? 'invalid' : 'valid';

  }



  register() {

    if (this.data.password !== this.data.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (this.data.password.length < 8) {
    alert('Password cannot be less than 8 characters long!');
    return;
  }

    if (this.data.password.length > 12) {
      alert('Password cannot be more than 12 characters long!');
      return;
    }

    if (this.data.password === this.data.password.toLowerCase()) {
      alert('Password must contain at least one uppercase letter!');
      return;
    }

    if (this.data.password === this.data.password.toUpperCase()) {
      alert('Password must contain at least one lowercase letter!');
      return;
    }

    if (!this.data.password.match(/[0-9]/)) {
      alert('Password must contain at least one number!');
      return;
    }

    if (!this.data.password.match(/[^a-zA-Z0-9]/)) {
      alert('Password must contain at least one special character!');
      return;
    }

    if (!this.data.email.includes('@')) {
      alert('Email must contain an @!');
      return;
    }

    if (!this.data.password.match(/[!?.]/)) {
      alert('These are not specific enough character');
      return;
    }

    from(createUserWithEmailAndPassword(this.auth, this.data.email, this.data.password)).pipe(take(1), catchError(() => {
      alert('Something went wrong');
      return NEVER;
    })).subscribe(() => alert('Success!'));
  }

  doNothing($event: ClipboardEvent) {
    $event.preventDefault();
  }

  reset() {
    this.data = new RegisterModel('', '', '');
  }

}
