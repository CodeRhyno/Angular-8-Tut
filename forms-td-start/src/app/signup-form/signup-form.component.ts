import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  @ViewChild('formElement', {static: true}) signupForm: NgForm;
  formSubmitted = false;
  suggestedEmails = ['a@d.com', 't@e.com', 'y@f.com', 'u@n.com'];
  suggestedEmail: string;
  subscriptions = [
    {
      id: 1,
      name: 'Basic'
    },
    {
      id: 2,
      name: 'Advanced'
    },
    {
      id: 3,
      name: 'Pro'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  suggestEmail() {
    this.suggestedEmail = this.suggestedEmails[Math.floor(Math.random() * 4)];
    console.log("dkjfbvdfjkv");
    this.signupForm.form.patchValue(
      {
        userData: {
          email: this.suggestedEmail
        }
      }
    );
  }

  submitForm(form: NgForm) {
    console.log(form);
  }

}
