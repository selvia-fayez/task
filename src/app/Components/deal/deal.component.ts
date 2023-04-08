import { Component, Input } from '@angular/core';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css'],
})
export class DealComponent {
  @Input() deal: any;
}
