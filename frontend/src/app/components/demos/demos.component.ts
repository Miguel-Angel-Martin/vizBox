import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Log, LoggingService, UnsavedChangesService, ShellCommunicationService } from '@avl-services/ng-services';

import { SettingsService } from 'app/core/services/settings.service';
import { Observable } from 'rxjs';
import '@avl-controls/core/dist/avl-card/avl-card';

@Component({
  selector: 'viz-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css'],
})
export class DemosComponent {

  public logs$: Observable<Log[]>;
  public localizatedDate: string;
  public formattedNumber: string;
  public isChild: boolean;

  demoForm: FormGroup;
  demoForm2: FormGroup;
  
  constructor(
    private loggingService: LoggingService,
    private settingsService: SettingsService,
    private readonly shellCommunicationService: ShellCommunicationService,
private unsavedChangesService: UnsavedChangesService
  ) {
    this.logs$ = this.loggingService.getLogs$();

    this.settingsService.locale$.subscribe(() => {
      this.localizatedDate =
        AvlLocalizationService.formatDateTime(new Date(), { format: 'date-short' }) +
        ' ' +
        AvlLocalizationService.formatDateTime(new Date(), { format: 'time-short' });
      this.formattedNumber = AvlLocalizationService.formatNumber(1234.567);
    });
    this.isChild = this.shellCommunicationService.isChild;
  }

  ngOnInit(): void {
    this.demoForm = new FormGroup({
      demoInput1: new FormControl(null, Validators.required),
      demoInput2: new FormControl(null, Validators.required),
    });
    this.demoForm2 = new FormGroup({
      demoInput3: new FormControl(null, Validators.required),
      demoInput4: new FormControl(null, Validators.required),
    });

  }

  public onSubmit(f: FormGroup) {
    f.reset();
  }

  public unregisterForm(f: FormGroup) {
    this.unsavedChangesService.unregisterForm(f);
  }

  public printForms() {
    console.log(this.unsavedChangesService.getRegisteredForms());
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

  addMenuItemClicked() {
    if (this.isChild) {
      this.shellCommunicationService.notifyShellAboutAction('addMenuItem');
    }
  }
}
