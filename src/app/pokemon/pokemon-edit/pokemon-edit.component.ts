import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {PokemonPopupComponent} from '../pokemon-popup/pokemon-popup.component';
import {Pokemon} from '../../models/Pokemon';
import {select, Store} from '@ngrx/store';
import * as fromPokemons from '../../@ngrx/pokemons';
import {PokemonState} from '../../@ngrx/app.state';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.css']
})
export class PokemonEditComponent implements OnInit {
  pokemon: Pokemon;
  updatedPokemon: Pokemon = {
    id: null,
    name: '',
    damage: null,
    creationDate: null,
    caught: false,
  };
  pokemonForm;
  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private dialog: MatDialog, private store: Store<PokemonState>) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    const pokemon$ = this.store.pipe(select(fromPokemons.PokemonById, { pokemon_id: id }));
    pokemon$.subscribe(res => {
      this.pokemon = res.data;
    });

    this.pokemonForm = this.formBuilder.group({
      name: this.pokemon.name,
      damage: this.pokemon.damage,
      creationDate: this.pokemon.creationDate.toDateString(),
      caught: this.pokemon.caught,
      cancel: false
    });
  }
  updatePokemonInfo(pokemonInfo): void {
    this.updatedPokemon.id = Number(this.activatedRoute.snapshot.params.id);
    this.updatedPokemon.name = pokemonInfo.name;
    this.updatedPokemon.damage = Number(pokemonInfo.damage);
    this.updatedPokemon.creationDate = new Date(pokemonInfo.creationDate);
    this.updatedPokemon.caught = pokemonInfo.caught;
  }

  onSubmit(pokemonData) {
    if (!this.pokemonForm.value.cancel) {
      this.updatePokemonInfo(pokemonData);
      this.store.dispatch(new fromPokemons.UpdatePokemon(this.updatedPokemon));
    }
    this.router.navigate(['pokemon/', this.pokemon.id]);
  }
  cancel() {
    this.pokemonForm.value.cancel = true;
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(PokemonPopupComponent, {
      width: '250px',
      data: {text: 'Data was saved successfully'}
    });
  }

}
