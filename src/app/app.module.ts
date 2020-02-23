import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { HistoryComponent } from '@components/history/history.component'
import { ChapterComponent } from '@components/chapter/chapter.component';
import { DialogComponent } from '@components/dialog/dialog.component';
import { Service } from "@services/service.service";


@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    ChapterComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,

    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
  ],
  entryComponents: [
    DialogComponent,
  ],
  providers: [
    HttpClientModule,
    Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
