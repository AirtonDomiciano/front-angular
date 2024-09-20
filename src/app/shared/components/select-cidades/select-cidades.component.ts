import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectCidadesService } from '../../services/select-cidades.service';
import Cidades from '../../model/cidades';

@Component({
  selector: 'app-select-cidades',
  templateUrl: './select-cidades.component.html',
  styleUrls: ['./select-cidades.component.scss'],
})
export class SelectCidadesComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() class = 'form-control rounded-pill mt-2';
  @Input() id = '';
  @Input() frmName = '';
  @Input() placeholder = '';

  public cidades!: Cidades[];

  constructor(private selectCidadesService: SelectCidadesService) {}

  async ngOnInit(): Promise<void> {
    await this.buscarCidades();
    this.listeners();
  }

  listeners(): void {
    this.form.controls[this.frmName].valueChanges.subscribe((evt) => {
      this.setarCidadePorNome(evt);
    });
  }

  async buscarCidades() {
    const res = await this.selectCidadesService.BuscarCidades();

    if (!res) {
      alert('DEU Errado');
      return;
    }

    this.cidades = res;
  }

  setarCidadePorNome(nomeCidade: string) {
    const cidade = this.cidades.find((c) => c.nomeCidade === nomeCidade);
    if (cidade) {
      this.form.controls[this.frmName].setValue(cidade.idCidades);
    }
  }
}
