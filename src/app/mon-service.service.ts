import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  constructor() { }

  test():string {
    return 'coucou';
  }
}
