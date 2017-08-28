import { Component, Input,Output, Injectable, HostListener,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { dialogBoxService } from '../dialogBox/dialogBox.service';

@Injectable()
export class SessionTimeoutService{
    private idleTimeout : number = 10;
    private fullTimeout : number = 20;
    public runTime : number = 0;
    
    constructor(private dialogboxService : dialogBoxService){
        
    }
    runTimeout() {        
        
        var timer1 = setInterval(() => {
            console.log(this.runTime);
            this.runTime++;      
            if(this.runTime == this.idleTimeout){
                console.log("Timeout Warning");
                this.dialogboxService.showDialog("Timeout Warning","You will be timeout in "+ (this.fullTimeout - this.idleTimeout).toString() + " seconds");
            }
            if(this.runTime == this.fullTimeout){
                console.log("you are Timeout");
                this.dialogboxService.showDialog("Timed Out","You are Timed out");       
                clearInterval(timer1);         
            }
        },1000);
    }
}

