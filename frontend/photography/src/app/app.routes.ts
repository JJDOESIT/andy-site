import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { PricingComponent } from './pricing/pricing.component';
import { WorksComponent } from './works/works.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "terms", component: TermsComponent},
    {path: "pricing", component: PricingComponent},
    {path: "works", component: WorksComponent},
];
