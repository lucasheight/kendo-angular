import { NgModule } from "@angular/core";
import { FactorDirective } from './factor.directive';
import { BrowserModule } from '@angular/platform-browser';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FactorComponent } from './factor.component';

@NgModule(
    {
        imports: [BrowserModule,
            InputsModule,
            BrowserAnimationsModule,
            FormsModule,
        ],
        declarations: [FactorDirective, 
            FactorComponent
        ],
        exports:[FactorComponent]
    }
)
export class FactorModule { }