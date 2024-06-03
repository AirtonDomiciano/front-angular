import { Component, Input, OnInit } from '@angular/core';
import { Cidades } from '../../interface/cidades.interface';
import { FormGroup } from '@angular/forms';
import { SelectCidadesService } from '../../services/select-cidades.service';

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
  }

  async buscarCidades() {
    const res = await this.selectCidadesService.BuscarCidades();

    if (!res) {
      alert('DEU Errado');
      return;
    }

    this.cidades = res;
  }
}
