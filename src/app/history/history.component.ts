import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.styl']
})
export class HistoryComponent implements OnInit {
  histories: any;
  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.getHistories();
  }
  getHistories() {
    this.historyService.getHistories().subscribe(
      (histories) => {
        this.histories = histories;
        console.log(histories);
      }, err => {
        console.error(err);
      });
  }
}
