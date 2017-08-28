import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule, ButtonModule, DataTableModule, DialogModule,ConfirmationService,ConfirmDialogModule }  from 'primeng/primeng';
import { AppComponent } from './app.component';
import { SessionTimeoutService } from './sessionTimeout/sessionTimeout.service';

import { dialogBoxService,dialogComponent} from './dialogBox';
import { confirmDialogBoxService,confirmDialogComponent } from './confirmDialog';

@NgModule({
  declarations: [
    AppComponent,
    dialogComponent,
    confirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule,
    HttpModule,
    InputTextModule, 
    DialogModule,
    ButtonModule,
    ConfirmDialogModule    
  ],
  providers: [dialogBoxService,confirmDialogBoxService,ConfirmationService,SessionTimeoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
