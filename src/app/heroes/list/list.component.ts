import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public arazNames: string[] = ['Araz', 'Aba', 'Nana', 'Farzad', 'Farzin'];
  public deleteFarzin?: string;

  removeLastFarzin(): void {
    this.deleteFarzin = this.arazNames.pop();
  }
}
