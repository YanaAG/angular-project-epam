import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Pokemon, PokemonService} from '../pokemon.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {PokemonPopupComponent} from '../pokemon-popup/pokemon-popup.component';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.css']
})
export class PokemonEditComponent implements OnInit {
  pokemon: Pokemon;
  pokemonForm;
  // tslint:disable-next-line:max-line-length
  constructor(private pokemonService: PokemonService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.pokemon = this.pokemonService.getById(Number(id));

    this.pokemonForm = this.formBuilder.group({
      name: this.pokemon.name,
      damage: this.pokemon.damage,
      creationDate: this.pokemon.creationDate.toDateString(),
      cancel: false
    });
  }
  updatePokemonInfo(pokemonInfo): void {
    this.pokemon.id = Number(this.activatedRoute.snapshot.params.id);
    this.pokemon.name = pokemonInfo.name;
    this.pokemon.damage = Number(pokemonInfo.damage);
    this.pokemon.creationDate = new Date(pokemonInfo.creationDate);
  }

  onSubmit(pokemonData) {
    if (!this.pokemonForm.value.cancel) {
      this.updatePokemonInfo(pokemonData);
      this.pokemonService.update(this.pokemon);
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
