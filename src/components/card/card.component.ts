import {Component, Input} from '@angular/core';

interface ICard {
  title?: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements ICard {
  @Input() title = '';
}
