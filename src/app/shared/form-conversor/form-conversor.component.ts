import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-conversor',
  templateUrl: './form-conversor.component.html',
  styleUrls: ['./form-conversor.component.scss']
})
export class FormConversorComponent {

    constructor() { }

    ngOnInit(): void {
    }

    converter(form: NgForm) {
      if(form.valid) {
        // this.
        console.log(form);
      } else {
        alert("Formulário inválido!");
      }
      console.log(form.controls);
    }
}
