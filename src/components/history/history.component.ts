import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { faEdit, faEye, faTrash, faPlus, faTimes, faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';

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
  public faPlus: IconDefinition;  // Add
  public faEdit: IconDefinition;  // Edit
  public faEye: IconDefinition;   // Details
  public faTrash: IconDefinition; // Delete
  public faTimes: IconDefinition; // Close
  public faEllipsisV: IconDefinition; // Close

  constructor(private http: HttpClient) {
    this._mgq = new Service(http, 'MGQ_SERVER');
    this.history = new History();
    this.histories = new Array<History>();
    this.isHistoryFormOpen = false;

    // Icons
    this.faPlus = faPlus;
    this.faEdit = faEdit;
    this.faEye = faEye;
    this.faTrash = faTrash;
    this.faTimes = faTimes;
    this.faEllipsisV = faEllipsisV;
  };

  async ngOnInit() {
    this.loadHistories();
  }

  public openHistoryForm(history?: History): void {
    this.makeHistory(history)
    this.isHistoryFormOpen = true;
  }

  public closeHistoryForm(): void {
    this.isHistoryFormOpen = false;
  }

  private makeHistory(history?: History) {
    this.history = history || new History();
  }

  // Crud Methods
  public async loadHistories(): Promise<any> {
    this.histories = await this.getHistories();
  }
  public async saveHistory(): Promise<any> {
    if (this.history.id) {
      await this.putHistory(this.history);
    } else {
      await this.postHistory(this.history);
    }
    this.closeHistoryForm();
    this.loadHistories();
  }
  public async removeHistory(history: History) {
    const { value: confirmatedDeletion } = await swal.fire({
      position: "center",
      title: "Realmente desejas deletar essa história?",
      text: "Esta ação não pode ser revertida",
      reverseButtons: true,
      showConfirmButton: true,
      confirmButtonText: "Sim",
      confirmButtonColor: "#36f469",
      showCancelButton: true,
      cancelButtonText: "Não",
      cancelButtonColor: "#f43646",
    });

    if (confirmatedDeletion) {
      const resolve = await this.deleteHistory(history);
      if (resolve === "OK") {
        this.loadHistories();
        swal.fire({
          icon: "success",
          title: "História deletada!",
          confirmButtonText: "Eba!",
          confirmButtonColor: "#36f469",
          timer: 1250,
        })
      } else {
        swal.fire({
          icon: "error",
          title: "Ooops..",
          text: "Infelizmente não foi possível deletar essa história. </br> Mas não se preocupe, estamos apurando o erro!",
          timer: 5000,
        })
      }
    }
  }

  // Services
  private async getHistories(): Promise<Array<History>> {
    const resolve = await this._mgq.list('history').go()
    return resolve.map((h: History): History => new History(h.id, h.author, h.title, h.resume));
  }
  private async postHistory(history: History): Promise<any> {
    return await this._mgq.post('history').requestBody(history).go();
  }
  private async putHistory(history: History): Promise<any> {
    return await this._mgq.put('history').requestBody(history).go();
  }
  private async deleteHistory(history: History): Promise<any> {
    return await this._mgq.delete('history').requestBody(history).go();
  }
}
