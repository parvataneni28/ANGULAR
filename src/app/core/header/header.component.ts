import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   langVar = true;
  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }
  changeLang() {
    this.langVar = !this.langVar;
this.translate.setDefaultLang(this.langVar ? 'en' : 'hi');
  }
}
