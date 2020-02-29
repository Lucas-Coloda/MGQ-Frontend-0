import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import {
  NgbAlertModule,
} from "@ng-bootstrap/ng-bootstrap";

import { HistoryComponent } from '@components/history/history.component'
import { ChapterComponent } from '@components/chapter/chapter.component';
import { Service } from "@services/service.service";
import { HistoryFormComponent } from '@components/history/history-form/history-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    ChapterComponent,
    HistoryFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,

    // from ngb-bootstrap
    NgbAlertModule,

    // from angular material
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [
    HttpClientModule,
    Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
