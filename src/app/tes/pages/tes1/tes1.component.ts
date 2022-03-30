import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tes1',
  templateUrl: './tes1.component.html',
  styleUrls: ['./tes1.component.css']
})
export class Tes1Component implements OnInit {

  numberOfData:number = 0

  data:number[] =[]

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onProccess(){
    this.data.length = this.numberOfData
  }

  onBack(){
    this.route.navigateByUrl('/hasil-tes')
  }

}
