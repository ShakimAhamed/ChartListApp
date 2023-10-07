import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  constructor(
    private router: Router
  ) {}

  navbarCollapsed = true
  ngOnInit():void{
    this.router.navigate(['chart/view-mode']);
  }

  clickNavDiv():void{
    var element:any = document.getElementById("basicExampleNav");
    element.classList.toggle("collapse");
  }


}
