import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = "";
  address: string = "";
  phone: string = "";
  cities: string = "";
  age: number = 0;

  cities = [
    {name: "São Paulo", state: "SP"},
    {name: "Porto ALegre", state: "RS"},
    {name: "Curitiba", state: "PR"},
    {name: "Rio de Janeiro", state: "RJ"}
 
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
