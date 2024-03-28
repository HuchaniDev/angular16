import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name:string ='IronMan';
  public age:number=45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getDescription():string{
    return `${this.name}- ${this.age}`
  }


  chagehero():void{
    this.name='spiderMan'
  }
  changeAge():void{
    this.age=50;
  }

  reset():void{
    this.name = 'IronMan';
    this.age = 45;
  }
}

