import { Component,EventEmitter,HostListener } from '@angular/core';
import { dialogBoxService} from './dialogBox';
import { confirmDialogBoxService } from './confirmDialog';
import {SessionTimeoutService} from './sessionTimeout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  private title : string = 'dialogBox';
  private displayDialog: boolean;
  private header : string;
  private messagebody : string;
  private mousedown = new EventEmitter<MouseEvent>();
  @HostListener('mousedown' , ['$event']) onMousedown(event) {
      //event.preventDefault();
      console.log('Mouse Down');
      //this.SessiontimeoutService.runTime = 0;
  }
  constructor(private dialogBoxservice : dialogBoxService,private confirmdialogBoxService : confirmDialogBoxService,private SessiontimeoutService : SessionTimeoutService){
    this.header = "App Header"
    this.messagebody = "Message body from App Component"
    this.SessiontimeoutService.runTimeout();
  }
  private showDialog() : void {  
    this.dialogBoxservice.showDialog(this.header ,this.messagebody);
    
  }
  private showconfirmDialog() : void {  
    this.confirmdialogBoxService.showDialog(this.header ,this.messagebody);
    
  }
}