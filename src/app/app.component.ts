import { Component, OnInit, Host } from '@angular/core';
import { SharedService } from './shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngNabulus';

  sharedData : any;

  constructor(private sharedService: SharedService) {

  }

  ngOnInit() {
    this.sharedData =this.sharedService.getSharedData();
  }


}
