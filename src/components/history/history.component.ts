import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { faCoffee, faPlus, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Service } from '@services/service.service';
import { History } from "@classes/history/history";

@Component({
  selector: 'app-history',
  templateUrl: '/history.component.html',
  styleUrls: ['./history.component.styl']
})

export class HistoryComponent implements OnInit {
  private _mgq: Service;
  public history: History;
  public histories: Array<History>;
  public isHistoryFormOpen: boolean;

  // incons
  public faPlus: IconDefinition;
  public faTimes: IconDefinition;
  public faCoffee: IconDefinition;

  constructor(private http: HttpClient) {
    this._mgq = new Service(http, 'MGQ_SERVER');
    this.history = new History();
    this.histories = new Array<History>();
    this.isHistoryFormOpen = false;

    // Icons
    this.faCoffee = faCoffee;
    this.faTimes = faTimes;
    this.faPlus = faPlus;
  };

  async ngOnInit() {
    this.loadHistories();
  }

  public openHistoyForm(history?: History): void {
    this.makeHistory(history)
    this.isHistoryFormOpen = true;
  }
  
  public closeHistoryForm(): void {
    this.isHistoryFormOpen = false;
  }

  private makeHistory (history?: History) {
    this.history = history || new History();
  }

  // Crud Methods
  public async loadHistories (): Promise<any>{
    this.histories = await this.getHistories();
    console.log(this.histories)
  }

  public async saveHistory (): Promise<any> {
    await this.postHistory();
    this.closeHistoryForm();
    await this.loadHistories();
  }

  // Services
  public async getHistories(): Promise<Array<History>> {
    const resolve = await this._mgq.list('history').go()
    return resolve.map( (h: History): History => new History(h.id, h.author, h.title, h.resume));
  }
  public async postHistory(): Promise<any> {
    return await this._mgq.post('history').requestBody(this.history).go();
  }
}
