import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Service } from '@services/service.service';
import { DialogComponent } from "@components/dialog/dialog.component";
import { History } from "@classes/history/history";

@Component({
  selector: 'app-history',
  templateUrl: '/history.component.html',
  styleUrls: ['./history.component.styl']
})

export class HistoryComponent implements OnInit {
  // herper vars
  public faCoffee: IconDefinition = faCoffee;
  private HISTORY = 'history';
  // values
  public history: History;
  public histories: any;
  private mgq: Service;

  constructor(private http: HttpClient, public dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.mgq = new Service(http, 'MGQ_SERVER');
  };

  async ngOnInit() {
    this.histories = await this.getHistories();
  }

  // methods
  openDialog(history: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800px',
      data: {
        title: history.title,
        subtitle: history.subtitle,
        resume: history.resume,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.history = result;
        console.log(this.history);
      }
    });
  }

  openSnackBar() {
    this._snackBar.open('Message archived', 'Undo', {
      duration: 2000,
    });
  }

  // Services
  public async getHistories(): Promise<any> {
    return await this.mgq.list(this.HISTORY).go()
  }
}
