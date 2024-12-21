import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  step1Form!: FormGroup;
  step2Form!: FormGroup;
  step3Form!: FormGroup;

  submit() {
    const finalData = {
      ...this.step1Form.value,
      ...this.step2Form.value,
      animales: this.step3Form.value.animales,
    };
    console.log('Datos finales:', finalData);
  }
}
