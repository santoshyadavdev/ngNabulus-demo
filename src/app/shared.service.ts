import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { NewsharedService } from './newshared.service';
@Injectable({
  providedIn: 'root',
  useExisting : NewsharedService
})
export class SharedService {

  constructor() {
    console.log('A new shared instance created');
   }

  getSharedData() {
    return {
      name: 'gdgNebulus',
      topic: 'Angular'
    }
  }


  addData() {
   return {};
  }
}
