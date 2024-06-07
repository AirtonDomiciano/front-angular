import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Cidades } from '../../interface/cidades.interface';
import { FormGroup } from '@angular/forms';
import { SelectCidadesService } from '../../services/select-cidades.service';
import { Subscription } from 'rxjs';

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
  @Input() cidade = '';
  @Input() placeholder = '';

  public idCidade!: number;
  public cidades!: Cidades[];
  public subscripe!: Subscription;
  constructor(private selectCidadesService: SelectCidadesService) {}

  ngOnDestroy(): void {}

  async ngOnInit(): Promise<void> {
    await this.buscarCidades();
    this.listeners();
  }

  listeners(): void {
    this.form.controls[this.cidade].valueChanges.subscribe((evt) => {
      const res = this.cidades.find((el) => el.nomeCidade === evt);
      this.form.controls[this.frmName].setValue(res?.idCidades);
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

  onSelect(cidade: Cidades) {
    console.log(cidade);
  }
}
