import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [NavbarComponent, NgFor],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  constructor(){
    this.addData();
  }

  public pricingData: [{[key:string]:string}] = [{}];

  private addData(){
    this.pricingData.pop()
    this.pricingData.push({"title":"Mini Session", "description": "Ideal for quick updates or headshots. Includes 30 minutes - 1 hour of shooting time. Minimum of 10 high resolution edited photos.", "image": "funny-cat.jpg", "price": "150"});
    this.pricingData.push({"title": "Standard Session", "description": "Perfect for families, couples, or individuals. Includes 1 -> 2 hours of shooting time", "image": "funny-cat.jpg","price": "250"});
    this.pricingData.push({"title": "Extended Session", "description": "Great for larger groups or special occasions. Includes 2 -> 3 hours of shooting time", "image": "funny-cat.jpg","price": "400"});
  }




}
