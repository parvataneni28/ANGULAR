import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  currentLang = 'en';

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  changeLang(): void {
    this.currentLang = this.currentLang === 'en' ? 'hi' : 'en';
    this.translate.use(this.currentLang);
  }
}
