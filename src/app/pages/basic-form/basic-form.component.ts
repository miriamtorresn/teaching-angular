import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  nameField = new FormControl("Default text");
  dateField = new FormControl();
  colorField = new FormControl();
  emailField = new FormControl("", [Validators.required, Validators.maxLength(10)]);
  categoryField = new FormControl(2);
  tagsField = new FormControl();
  radioField = new FormControl();
  checkboxField = new FormControl(false);
  zoneField = new FormControl();

  constructor() { }
  
  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(value => {
      console.log('is changing', value);
    })
  }

  getNameFieldValue() {
    console.log(this.nameField.value);
  }

  emailFieldHasError() {
    return this.emailField.invalid && this.emailField.touched;
  }
}
