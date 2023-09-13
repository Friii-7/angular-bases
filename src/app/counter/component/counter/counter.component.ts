import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ conter}} </h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `,
})
export class CounterComponent {
public conter: number = 7;

  increaseBy(amount: number): void {
    this.conter += amount;
  }

  reset(): void{
    this.conter = 7;
  }

}
