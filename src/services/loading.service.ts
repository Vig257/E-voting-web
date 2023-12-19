import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadinScreen: BehaviorSubject<boolean> | undefined
  constructor() { }

  setLoadingScreen(value: boolean) {
    this.loadinScreen?.next(value)
  }
  getLoadingScreen() {
    return this.loadinScreen
  }
}
