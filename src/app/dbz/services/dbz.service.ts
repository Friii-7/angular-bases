import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class dbzService {
  public character: Character[] = [
    {
      id: uuid(),
      name: 'Araz',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Batman',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Farzad',
      power: 876432,
    },
  ];

  onNewCharacter(character:Character): void {

    const newCharacter: Character = {
      id: uuid(), ...character
    }
    this.character.push(newCharacter);
  }

  onDeleteCharacter(index: number) {
    this.character.splice(index, 1);
  }

}
