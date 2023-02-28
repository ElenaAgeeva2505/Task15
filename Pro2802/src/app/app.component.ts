import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscriber } from 'rxjs';
import { AuthState } from '../store/auth.state';
import { AuthUpdate } from '../store/model/auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store
  ) {}

  currentAuth = this.store.selectSnapshot(AuthState.getAuthObject);

  ngOnInit() {
    console.log(this.store.selectSnapshot(AuthState.getToken));
    console.log(this.store.selectSnapshot(AuthState.getAuthObject));

    this.store.select(AuthState.getAuthObject).subscribe({
      next: (value) => {
        this.currentAuth = value
      }
    })


  }

  updateAuthState() {
    this.store.dispatch(new AuthUpdate({
      isAuth: true,
      login: 'loginName',
      token: 'tokenString'
    }))
  }

  resetAuthState() {
    this.store.dispatch(new AuthUpdate({
      isAuth: false,
      login: null,
      token: null
    }))
  }
}
