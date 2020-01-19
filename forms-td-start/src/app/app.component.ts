import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formElement', {static: true}) signUpForm: NgForm;
  formSubmitted = false;
  questions: {
    val: string,
    question: string
  }[] = [
    {
      val: 'pet',
      question: 'Name of your pet?'
    },
    {
      val: 'teacher',
      question: 'Name of your teacher?'
    },
    {
      val: 'friend',
      question: 'Name of your friend?'
    }
  ]
  selectedQuestion: string;
  answer: string = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.formSubmitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.selectedQuestion;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
