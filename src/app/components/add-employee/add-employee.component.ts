import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Data';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output() onAddEmployee: EventEmitter<Employee> = new EventEmitter();
  name: string = '';
  text: string = '';
  designation: string = '';
  number: number=0;
  reminder: boolean= false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.name){
      alert("please add a name");
      return;
    }
    const newEmployee = {
      name: this.name,
      text: this.text,
      designation: this.designation,
      number: this.number,
      reminder: this.reminder
    }
    this.onAddEmployee.emit(newEmployee)
    this.name ='';
    this.text = '';
    this.designation = '';
    this.number = 0;
    this.reminder = false;
  }

}
