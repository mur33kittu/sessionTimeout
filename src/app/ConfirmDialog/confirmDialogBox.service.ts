import { Component , Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import {ConfirmationService} from 'primeng/primeng';

export interface dialogState{
    displayDialog : boolean,
    header : string,
    messageBody : string
}

@Injectable()
export class confirmDialogBoxService {

    show:Subject<dialogState> = new Subject<dialogState>();
    private dialogstate : Observable<dialogState> = this.show.asObservable();
    constructor(private confirmationService : ConfirmationService){
        
    }
    public showDialog(header : string, messageBody : string) : void  {        
        this.confirmationService.confirm({
            message : messageBody,
            accept: () => {
                console.log("accepted");
            },
            reject :() => {
                console.log("rejected");  
            }
        });
        this.show.next(<dialogState>{ 
            displayDialog : true , header : header , messageBody :  messageBody       
        });
    }
    public getState() : Observable<dialogState>{
        return this.show;
    }
}