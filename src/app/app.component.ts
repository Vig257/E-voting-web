import { Component } from '@angular/core';
import { LoadingService } from 'src/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-voting-cms';
  isLoading: boolean = true; // Set to true initially, replace with your actual loading logic
  constructor(
    private loadingServices: LoadingService
  ) {

  }
  // Example: Simulate loading completion after 3 seconds
  ngOnInit() {
    this.loadingServices.getLoadingScreen()?.subscribe((response => {
      this.isLoading = response
    }))
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 3000);
  }
}
