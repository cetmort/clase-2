import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../../../services/compartido/compartido.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  constructor(private CompartidoService: CompartidoService) { }

  ngOnInit(): void {
    this.fillForm();
  }
  
  public fillForm(){
    let button = document.getElementById("btn-1");
    button?.addEventListener("click", () => {
      this.CompartidoService.name = "rodri";
      this.CompartidoService.email = "cetmor@gmail.com";
      console.log(this.CompartidoService)
    })

  }
}
