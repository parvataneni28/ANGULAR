import { Component, OnInit } from '@angular/core';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private backend: BackendService) { }
  ngOnInit() {
   
    this.backend.getConfig().subscribe(
      res => {
        console.log('RESPONSE', res);
      }
    );
  }
  title = 'angular-spring-project';
}
