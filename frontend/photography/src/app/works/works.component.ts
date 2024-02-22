import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  imagePaths: string[] = [];

  constructor() {
    const folderPath = 'assets/images/works/';
    fetch(folderPath + 'files.json')
      .then(response => response.json())
      .then(data => {
        this.imagePaths = data.map((path: string) => folderPath + path);
      })
      .catch(error => {
        console.error('Error fetching files.json:', error);
      });
    
    console.log(this.imagePaths);
    
  }
}