import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "terms", component: TermsComponent}
];
