import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PerformanceService } from './services/performance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'angular-spring-project';

  constructor(private performanceService: PerformanceService) {}

  ngOnInit(): void {
    // Log performance metrics after page load
    setTimeout(() => {
      this.performanceService.logPerformanceMetrics();
    }, 1000);
  }
}
