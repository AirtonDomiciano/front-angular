import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input() footerExpaned = true;
  @Output() toggleFooter: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleFooterToggle = () => this.toggleFooter.emit(!this.footerExpaned);
}
