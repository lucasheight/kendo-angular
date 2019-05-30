import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit, OnDestroy{
  val:number=0.5;
    title = 'factor';
  
  ngOnInit(): void {
  
  }
  ngOnDestroy(): void {
  
  }



}
