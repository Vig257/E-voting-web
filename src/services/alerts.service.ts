import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }
  showAlert(title: string, message: string, icon: 'success' | 'error' | 'warning' | 'info' = 'success') {
    return Swal.fire({
      title,
      text: message,
      icon,
    })
  }
}
