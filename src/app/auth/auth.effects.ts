import {Injectable} from '@angular/core';
import {Actions, ofType} from '@ngrx/effects';
import {AuthActions} from './action.types';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions) {
    const login$ = this.action$.pipe(
      ofType(AuthActions.login),
      tap(action => {
        localStorage.setItem('user', JSON.stringify(action.user));
      })
    );

    login$.subscribe();
  }
}
