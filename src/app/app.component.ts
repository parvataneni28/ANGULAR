import { Component, OnInit } from '@angular/core';
import { BackendService } from './services/backend.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private backend: BackendService,
    public translate: TranslateService) {
      translate.addLangs(['en', 'nl']);
      translate.setDefaultLang('en');
     }
  ngOnInit() {
    this.backend.getConfig().subscribe(
      res => {
        console.log('RESPONSE', res);
      }
    );
  }
  title = 'angular-spring-project';
}
