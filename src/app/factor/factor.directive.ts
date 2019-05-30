import { Directive, ElementRef, OnInit, OnDestroy, AfterViewInit, HostListener, Input, EventEmitter } from '@angular/core';
import { NumericTextBoxComponent } from '@progress/kendo-angular-inputs';
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";

@Directive({
  selector: 'kendo-numerictextbox[factor]'
})
export class FactorDirective implements OnInit, OnDestroy, AfterViewInit {
  destroy$: Subject<void> = new Subject();
  @Input("factor") fact: number = 1;
  propogateChange: Function = (_: any) => { };

  constructor(private el: NumericTextBoxComponent) { }

  ngOnInit(): void {
    if (typeof this.fact !== "number") {
      throw "Factor must be a number"

    }
    this.el.registerOnChange = (fn) => {
      //console.log("registerOnchange")
      this.propogateChange = fn;
    }
  }
  ngAfterViewInit(): void {

    this.el.onFocus.pipe(takeUntil(this.destroy$)).subscribe(s => {
      this.el.value = this.el.value * this.fact;
      this.el.notifyValueChange();
      // console.log("onFocus", this.el.value);
    })
    this.el.onBlur.pipe(takeUntil(this.destroy$)).subscribe(s => {
      this.el.value = this.el.value / this.fact;
      this.el.notifyValueChange();
      // console.log("onBlur", this.el.value)
    })
    this.el.valueChange.pipe(takeUntil(this.destroy$))
      .subscribe(s => {
        this.propogateChange(s / this.fact);
        // console.log("valueChanges", s)
      })
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
