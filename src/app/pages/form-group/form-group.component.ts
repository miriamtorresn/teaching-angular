import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {

  form = new FormGroup({
    name: new FormControl("Default text"),
    date: new FormControl(),
    color: new FormControl(),
    email: new FormControl("", [Validators.required, Validators.maxLength(10)]),
    category: new FormControl(2),
    tags: new FormControl(),
    radio: new FormControl(),
    checkbox: new FormControl(false),
    zone: new FormControl()
  });

  

  constructor() { }
  
  ngOnInit(): void {
  }

  get emailField() {
    return this.form.get('email');
  }

  submitFunction() {
    console.log('submitting!', this.form.value);
    console.log(this.emailField?.value);
  }

  isFormInvalid() {
    return this.form.invalid;
  }
}
