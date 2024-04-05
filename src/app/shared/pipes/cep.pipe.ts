import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep',
})
export class CepPipe implements PipeTransform {
  transform(value: string): string {
    let myLabel: string = value.slice(0, 5);

    myLabel += '-';
    myLabel += value.slice(5, 8);

    return myLabel;
  }
}
