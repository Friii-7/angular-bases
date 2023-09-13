import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Apachi';
  public age: number = 7;


  get  nombreCapitalizado():string {
    return this.name.toUpperCase();
  }


  getHeroDescription (): string {
    return `El héroe ${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Nizraf';
  }

  changeAge(){
    this.age = 777;
  }
  rest(){
    this.name = 'Apachi';
    this.age = 7;
    this.getHeroDescription;
    this.nombreCapitalizado;


    // document.querySelectorAll('h2')!.forEach( element => {element.innerHTML = '<h2>Soy Farzin</h2>'})
  }

}
