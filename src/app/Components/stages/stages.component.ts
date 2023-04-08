import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css'],
})
export class StagesComponent {
  word: string = '';
  stages: string[] = [
    'Potential Value',
    'Focus',
    'Contact Made',
    'Offer Sent',
    'Getting Ready',
  ];
}
