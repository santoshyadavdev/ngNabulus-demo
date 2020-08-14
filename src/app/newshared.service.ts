import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsharedService {

  constructor() { }

  getSharedData() {
    return {
      name: 'gdgNebulus',
      topic: 'Angular is awesome'
    }
  }

  addData() {
    return {};
  }
}
