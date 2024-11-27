import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-elado-motorok',
  standalone: false,
  
  templateUrl: './elado-motorok.component.html',
  styleUrl: './elado-motorok.component.css'
})
export class EladoMotorokComponent {
    rendszam:string = "";
    gyarto:string = "";
    tipus:string = "";
    ccm3:number = 0;
    henger:string = "";

    motorTomb:Motor[] = [];

    felvitel():void {
      var moci:Motor = {
      rendszam: this.rendszam,
      gyarto: this.gyarto,
      tipus: this.tipus,
      ccm3: this.ccm3,
      henger: this.henger
      }

      this.motorTomb.push(moci);
    }
    

    
}

export interface Motor {
  rendszam:string,
  gyarto:string,
  tipus:string,
  ccm3:number,
  henger:string
}
