import { Component,Input,Injectable,OnInit,OnDestroy } from '@angular/core';
import { dialogBoxService,dialogState } from './dialogBox.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';

@Component({
  selector: 'dialogBox',
  templateUrl: './dialogBox.component.html'
})

@Injectable()
export class dialogComponent implements OnDestroy,OnInit {
  private title : string = 'dialogBox';
  displayDialog : boolean;
  header : String;
  messagebody : String;
  private subscription : Subscription;
  private dialogstate : dialogState;
  constructor(private dialogboxService : dialogBoxService){
    //this.showDialogs();
  }
  ngOnInit(){
    let observableState : Observable<dialogState> = this.dialogboxService.getState();
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