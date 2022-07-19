import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title= 'Employees';
  constructor() { }

  ngOnInit(): void {
  }
  toggleEmployee(){
    console.log("employee_details");
  }

}
