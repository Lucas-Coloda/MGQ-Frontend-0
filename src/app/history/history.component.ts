import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { DialogComponent } from "../dialog/dialog.component";
import { Service } from '../services/service.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.styl']
})


export class HistoryComponent implements OnInit {
  public faCoffee: IconDefinition = faCoffee;
  public histories: any;
  public history: any = { title: null, subtitle: null, resume: null };

  constructor(private mgq: Service, public dialog: MatDialog, private _snackBar: MatSnackBar) {
    mgq.setServer('MGQ_SERVER')
  };

  async ngOnInit() {
    this.histories = await this.getHistories();
  }

  // methods
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800px',
      data: {
        title: this.history.title,
        subtitle: this.history.subtitle,
        resume: this.history.resume,
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
  async getHistories(): Promise<any> {
    //await this.Service.get('entity').slash(id).queryString({a:1, b:2}).queryStringAsTemplate(`my onw URI`)
    console.log(await this.mgq.get('history').slash(1).go());
    console.log(await this.mgq.list('history').go());
    console.log(await this.mgq.post({ title: 't', subtitle: 's', resume: 'r' }));
    console.log(await this.mgq.put({"id": 201, "title": "102", "subtitle": "2160", "resume": "0220"}));
    console.log(await this.mgq.delete({"id": 201, "title": "102", "subtitle": "2160", "resume": "0220"}));
  }
}
