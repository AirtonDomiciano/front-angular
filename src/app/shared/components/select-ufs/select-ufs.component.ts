import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectUfsService } from '../../services/select-ufs.service';
import { Ufs } from '../../interface/ufs.interface';

@Component({
  selector: 'app-select-ufs',
  templateUrl: './select-ufs.component.html',
  styleUrls: ['./select-ufs.component.scss'],
})
export class SelectUfsComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() class = 'form-control rounded-pill mt-2';
  @Input() id = '';
  @Input() frmName = '';
  @Input() placeholder = '';

  public ufs!: Ufs[];

  constructor(private selectUfsService: SelectUfsService) {}

  async ngOnInit(): Promise<void> {
    await this.buscarUfs();
  }

  async buscarUfs() {
    const res = await this.selectUfsService.BuscarUfs();

    if (!res) {
      alert('DEU Errado');
      return;
    }

    this.ufs = res;
  }
}
