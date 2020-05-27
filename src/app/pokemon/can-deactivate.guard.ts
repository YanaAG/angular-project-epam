import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {PokemonEditComponent} from './pokemon-edit/pokemon-edit.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<PokemonEditComponent> {
  canDeactivate(
    component: PokemonEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.pokemonForm.value.cancel) {
        component.pokemonForm.value.cancel = false;
        return window.confirm('Are you sure?');
      } else { return true; }
  }
}
