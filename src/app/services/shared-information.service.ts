import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedInformationService {
   private contractSignal = signal<any>(null);

   getContract(){
    return this.contractSignal();
   }

   setContract(data:any){
    this.contractSignal.set(data);
   
   }

   
   
}
