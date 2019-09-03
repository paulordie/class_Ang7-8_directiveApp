import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgCLassComponent implements OnInit {

  myclass = "myclass1";

  constructor() { }

  ngOnInit() {
  }

}
