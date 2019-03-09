import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder)
  {
    this.createForm();
  }

  OnSubmit()
   {
     alert('ok');
   }

  ngOnInit() {
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['',Validators.required],
      usercity: ['',Validators.maxLength(5)]
    })
  }

}
