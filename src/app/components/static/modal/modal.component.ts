import { Component, effect, EventEmitter, inject, Input, Output } from '@angular/core';
import { Icontract } from '../../../interfaces/icontract.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedInformationService } from '../../../services/shared-information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

 sharedService = inject(SharedInformationService)
  router= inject(Router);

  contractForm:FormGroup
  constructor(){
    this.contractForm =new FormGroup({
      idContract: new FormControl ("",[Validators.required, Validators.pattern(/^[A-Za-z0-9-]{6,}$/)]),
      firstName: new FormControl ("", [Validators.required, Validators.pattern(/^[A-Za-z]{3,}$/)])
      
    },[])
  }



  cargarDatos(){
    this.sharedService.setContract({id:this.contractForm.value.idContract,firstName:this.contractForm.value.firstName})
    
  }

  checkControl(formControlName:string,validator:string){
    return this.contractForm.get(formControlName)?.hasError(validator) 
    && this.contractForm.get(formControlName)?.touched
  }

  

}
