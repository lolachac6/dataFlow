import { Component, effect,inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HandleComponent } from "ngx-vflow";
import { SharedInformationService } from '../../../services/shared-information.service';
import { Ishared } from '../../../interfaces/ishared.interface';



@Component({
  selector: 'app-home-component',
  imports: [FormsModule, HandleComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  @Input() ctx!:any ;
  @Input() button!: boolean;
  @Input() sharedData!: Ishared;

}
