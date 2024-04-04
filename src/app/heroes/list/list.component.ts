import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
 export class ListComponent {

  public heroNames:string[]=['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deletedHero?:string;
  
  public editId:number |null=null;
  public newName:string='';

  public name:string='';

  removeLastHero():void{
    this.deletedHero=this.heroNames.pop()
  }
  reset():void{
    this.heroNames = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
    this.deletedHero;
  }

  create():void{

  }

  editar(id:number):void{
    this.editId=id;
    this.newName = this.heroNames[id];
  }

  save(){
    if(this.editId !== null){
      this.heroNames[this.editId] = this.newName;
      this.editId=null;
      this.newName='';
    }
  }




  borrar(id:number):void{
    this.deletedHero=this.heroNames[id];
    this.heroNames.splice(id,1);
  }
  





}