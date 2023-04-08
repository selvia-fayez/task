import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent {
  @Input() stage: any;
  @Input() word: any;
  constructor(private dealsService: DealsService) {}
  Deals: any[] = [];
  customDeals: any[] = [];

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.dealsService.getDeals().subscribe((data) => {
      this.Deals = data.deals;
      this.customDeals = this.Deals.filter(
        (deal) => deal.status === this.stage
      );
    });
  }
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
