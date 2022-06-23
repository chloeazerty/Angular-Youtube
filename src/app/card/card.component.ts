import { Component, Input, OnInit } from '@angular/core';
import { CardVideoList } from '../models/CardVideo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input () cardChild: CardVideoList = new CardVideoList("", "", "", "", "", "");
  constructor() { }

  ngOnInit(): void {
  }

}
