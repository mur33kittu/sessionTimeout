import { Component , Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { dialogComponent } from './dialogBox.component';

export interface dialogState{
    displayDialog : boolean,
    header : string,
    messageBody : string
}

@Injectable()
export class dialogBoxService {

    show:Subject<dialogState> = new Subject<dialogState>();
    private dialogstate : Observable<dialogState> = this.show.asObservable();
    constructor(){
        
    }
    public showDialog(header : string, messageBody : string) : void  {        
        this.show.next(<dialogState>{ 
            displayDialog : true , header : header , messageBody :  messageBody       
        });
    }
    public getState() : Observable<dialogState>{
        return this.show;
    }
}