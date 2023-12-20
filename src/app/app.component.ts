import { Component } from '@angular/core';
import { AlertsService } from 'src/services/alerts.service';
import { LoadingService } from 'src/services/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-voting-cms';
  isLoading: boolean = false; 
  constructor(
    private loadingServices: LoadingService,
    private alertService: AlertsService
  ) {

  }
  ngOnInit() {
    this.alertService.showAlert('Welcome', 'Hi voters', 'success')
  }

}
