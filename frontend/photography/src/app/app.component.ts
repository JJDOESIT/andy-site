import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TermsComponent } from './terms/terms.component';
import { PricingComponent } from './pricing/pricing.component';
import { CommonModule, NgFor } from '@angular/common';
import { WorksComponent } from './works/works.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, TermsComponent, PricingComponent, CommonModule, WorksComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photography';
}
