import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {
  
  private _name: string = '';
  private _emial: string = '';

  get name(): string{
    return this._name;
  }

  set name(name: string){
    this._name = name;
  }
  
  get email(): string{
    return this._emial;
  }

  set email(email: string){
    this._emial = email;
  }

  constructor() { }


}
