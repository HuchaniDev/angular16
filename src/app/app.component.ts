import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'MI primera App de Angular';
  public counter:number = 10;

  incriceBy(value:number):void{
    this.counter+=value;
  }

  reset():void{
  this.counter=10;
  }

  decriceBy(value:number):void{
    if(this.counter<1) this.counter=0;
    else this.counter-=value;
  }
}
