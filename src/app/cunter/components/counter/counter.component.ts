import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `<h1 class="bg-green-300 rounded-lg px-10">Counter</h1>
    
    <div class="flex justify-center p-5 space-x-4 bg-slate-400">
        <h4 class="text-red-500 font-bold text-xl">Counter:</h4>
        <p class="text-black font-bold text-xl bg-slate-300 rounded-md w-20">{{ counter }} </p>
    </div>
    <div class=" flex justify-center bg-yellow-500 p-2 space-x-5">
        <button class=" bg-amber-400 rounded-md p-1 w-20 transition duration-300 ease-in-out hover:bg-amber-600 hover:text-white font-semibold" (click)="decriceBy(+1)">-1</button>
        <button class=" bg-amber-400 rounded-md p-1 w-20 transition duration-300 ease-in-out hover:bg-amber-600 hover:text-white font-semibold " (click)="reset()">recet</button>
        <button class=" bg-amber-400 rounded-md p-1 w-20 transition duration-300 ease-in-out hover:bg-amber-600 hover:text-white font-semibold " (click)="decriceBy(-1)">+1</button>
    </div>
        
`
})


export class CounterComponent{

    public counter:number = 10;

    decriceBy(value:number):void{
        if(this.counter<1) this.counter=0;
        else this.counter-=value;
    }

    reset():void{
    this.counter=10;
    }
}