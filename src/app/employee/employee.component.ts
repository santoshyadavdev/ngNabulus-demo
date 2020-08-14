import { Component, OnInit, Self } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [SharedService]
})
export class EmployeeComponent implements OnInit {

  // sharedService = new SharedService();
  sharedData : any;

  constructor(@Self() private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedData= this.sharedService.getSharedData();
  }

}
