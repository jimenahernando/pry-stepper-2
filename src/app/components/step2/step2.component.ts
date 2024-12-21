import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      pais: ['', Validators.required]
    });
    this.formReady.emit(this.form);
  }
}