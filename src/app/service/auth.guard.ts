import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate() {
    localStorage.setItem('userId','testing');
    if (localStorage.getItem('userId')) {
      return true;
    }
    else {
      alert('No logged in...')
      false;
    }
  }

}
