import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tes',
  templateUrl: './tes.component.html',
  styleUrls: ['./tes.component.css']
})
export class TesComponent implements OnInit {

  constructor(private route:Router) { }

  isHide =false

  ngOnInit(): void {
  }

  onTes1(){
    this.isHide=true
    this.route.navigateByUrl('/tes1')
  }
  onTes2(){
    this.isHide=true
    this.route.navigateByUrl('/tes2')
  }
  onTes3(){
    this.isHide=true
    this.route.navigateByUrl('/tes3')
  }
  onTes4(){
    this.isHide=true
    this.route.navigateByUrl('/tes4')
  }

}
