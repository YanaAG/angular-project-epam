import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PopupData {
  text: string;
}

@Component({
  selector: 'app-pokemon-popup',
  templateUrl: './pokemon-popup.component.html',
  styleUrls: ['./pokemon-popup.component.css']
})
export class PokemonPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PokemonPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: PopupData) { }

  ngOnInit(): void {
  }

  onOkClick(): void {
    this.dialogRef.close();
  }
}
