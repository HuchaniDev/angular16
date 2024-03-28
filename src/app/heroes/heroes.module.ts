import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { literalMap } from "@angular/compiler";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";



@NgModule({
    declarations:[
        HeroComponent,
        ListComponent,
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        HeroComponent,
        ListComponent,    
    ],
})

export class HeroModel{} 