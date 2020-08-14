import { Component, OnInit, SkipSelf, Optional } from '@angular/core';
import { SharedService } from '../shared.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(@SkipSelf() private sharedService: SharedService,
  @Optional() private loggerService: LoggerService) { }

  ngOnInit(): void {
    if(this.loggerService) {
      this.loggerService.log();
    }
  }

}
