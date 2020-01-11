import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formElement', {static: true}) signUpForm: NgForm;
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

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
