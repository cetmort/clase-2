import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnoComponent } from './components/uno/uno.component';
import { DosComponent } from '../dos/components/dos/dos.component';




@NgModule({
  declarations: [
    UnoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UnoComponent
  ]
 
})
export class UnoModule { }
