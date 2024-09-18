import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManipulaCampoAtivoService {
  private mostrarAtivosSubject = new BehaviorSubject<boolean>(true);

  atualizarValorAtivo(valor: boolean): void {
    this.mostrarAtivosSubject.next(valor);
  }

  MostrarValorAtivoAtual(): boolean {
    return this.mostrarAtivosSubject.getValue();
  }
}
