import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HistoryComponent } from "../history/history.component";

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.styl']
})
export class SnackBarComponent implements OnInit{
  constructor(private _snackBar: MatSnackBar) {}
  ngOnInit() {
  }
}

