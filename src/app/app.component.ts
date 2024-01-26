import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie App';
  pcolor:string=''
  setColor(color:string){
    console.log(color)
    this.pcolor=color;
  }
  name:string=''
}
