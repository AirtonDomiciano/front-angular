<<<<<<< HEAD
<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
=======
import { Component, Input } from '@angular/core';
>>>>>>> e579271 (criando input number)
=======
import { Component, Input, OnInit } from '@angular/core';
>>>>>>> 5572933 (criando input number)
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
<<<<<<< HEAD
<<<<<<< HEAD
export class InputNumberComponent implements OnInit {
=======
export class InputNumberComponent {
>>>>>>> e579271 (criando input number)
=======
export class InputNumberComponent implements OnInit {
>>>>>>> 5572933 (criando input number)
  @Input() form!: FormGroup;
  @Input() type: string = 'number';
  @Input() class = 'form-control rounded-pill mt-2';
  @Input() id = '';
  @Input() frmName = '';
  @Input() placeholder = '';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5572933 (criando input number)

  constructor() {}

  ngOnInit(): void {}
<<<<<<< HEAD
=======
>>>>>>> e579271 (criando input number)
=======
  @Input() min = '0';
>>>>>>> 0b267ab (criando input number)
=======
>>>>>>> 5572933 (criando input number)
}
