import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tes2',
  templateUrl: './tes2.component.html',
  styleUrls: ['./tes2.component.css']
})
export class Tes2Component implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  fibonacciNumber:number =0

  fibonacciResult:string =''

  onFibonacci(){
    this.fibonacciResult=''
    let p = 1, c=0;
		for(let i=1;i<=this.fibonacciNumber;i++) {
			let temp =0;
      this.fibonacciResult = this.fibonacciResult+' '+c
			temp = c+p;
			p=c;
			c=temp;
		}  
  }

  onBack(){
    this.route.navigateByUrl('/hasil-tes')
  }

}
