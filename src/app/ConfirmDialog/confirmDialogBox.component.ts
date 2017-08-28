import { Component,Input,Injectable,OnInit,OnDestroy } from '@angular/core';
import { confirmDialogBoxService,dialogState } from './confirmDialogBox.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';

@Component({
  selector: 'confirmDialogBox',
  templateUrl: './confirmDialogBox.component.html'
})

@Injectable()
export class confirmDialogComponent implements OnDestroy,OnInit {
  private title : string = 'dialogBox';
  displayDialog : boolean;
  header : String;
  messagebody : String;
  private subscription : Subscription;
  private dialogstate : dialogState;
  constructor(private confirmdialogboxService : confirmDialogBoxService){
    //this.showDialogs();
  }
  ngOnInit(){
    let observableState : Observable<dialogState> = this.confirmdialogboxService.getState();
    this.subscription = observableState.subscribe((state : dialogState) => {
      this.displayDialog=state.displayDialog;
      this.header = state.header;
      this.messagebody = state.messageBody
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 
}