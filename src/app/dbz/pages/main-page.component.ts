import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(public dbzService: dbzService){}
}
