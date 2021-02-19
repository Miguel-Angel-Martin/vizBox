import { Component } from '@angular/core';
import { Log, LoggingService } from '@avl-services/ng-services';
import { Observable } from 'rxjs';

@Component({
  selector: 'viz-logging-demo',
  templateUrl: './logging-demo.component.html',
  styleUrls: ['./logging-demo.component.css']
})
export class LoggingDemoComponent {

  public logs$: Observable<Log[]>;

  constructor(private loggingService: LoggingService) {
    this.logs$ = this.loggingService.getLogs$();
  }

  public debug(): void {
    this.loggingService.debug('Debug Message', this.constructor.name);
  }

  public info(): void {
    this.loggingService.info('Info Message', this.constructor.name);
  }

  public warn(): void {
    this.loggingService.warn('Warning Message', this.constructor.name);
  }

  public error(): void {
    this.loggingService.error('Error Message', this.constructor.name);
  }

  public fatal(): void {
    this.loggingService.fatal('Fatal Message', this.constructor.name);
  }

}
