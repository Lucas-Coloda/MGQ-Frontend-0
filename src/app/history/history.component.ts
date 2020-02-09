import { Component, OnInit, } from '@angular/core';
import { Services } from '../services/services.service';
import { faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.styl']
})


export class HistoryComponent implements OnInit {
  public faCoffee: IconDefinition = faCoffee;
  public histories: any;

  constructor(private Service: Services) {

  };

  async ngOnInit() {
    this.histories = await this.getHistories();

    console.log(this.histories);
  }

  async getHistories(): Promise<any> {
    return await this.Service.getList('history');
  }
}
