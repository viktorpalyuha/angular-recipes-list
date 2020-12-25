import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  feature = 'recipe';
  
  setFeature(event: string) {
    this.feature = event;
  }
}
