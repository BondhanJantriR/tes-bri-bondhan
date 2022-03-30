import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tes3',
  templateUrl: './tes3.component.html',
  styleUrls: ['./tes3.component.css']
})
export class Tes3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigateByUrl('/hasil-tes')
  }

}
