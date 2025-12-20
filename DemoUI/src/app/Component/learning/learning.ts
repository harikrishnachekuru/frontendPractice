import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-learning',
  imports: [FormsModule],
  templateUrl: './learning.html',
  styleUrl: './learning.css',
})
export class Learning implements OnInit,OnChanges,DoCheck, AfterContentInit,AfterViewInit, AfterViewChecked,OnDestroy, AfterContentChecked{

  @Input() name1!: string;


  constructor(){
    console.log("This is Constructor Class");
  }

  ngOnInit(): void {
    console.log("This is Oninit LifeCycle");
  }

  ngOnChanges(): void {
    console.log("This is OnChanges LifeCycle");
  }

  ngDoCheck(): void {
    console.log("This is DoCheck LifeCycle");
  }

  ngAfterContentInit(): void {
    console.log("This is Content Init LifeCycle");
  }

  ngAfterViewChecked(): void {
    console.log("This is View Checked LifeCycle");
  }

  ngAfterViewInit(): void {
    console.log("This is View LifeCycle");
  }

  ngAfterContentChecked(): void {
    console.log("This is ContentChecked LifeCycle");
  }

  ngOnDestroy(): void {
    console.log("This is Destroy LifeCycle");
  }



}
