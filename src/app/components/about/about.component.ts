import { Component } from '@angular/core';
import { ShellCommunicationService } from '@avl-services/ng-services';

@Component({
  selector: 'viz-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public isChild: boolean;

  constructor(
    public shellCommunicationService: ShellCommunicationService
  ) {
    if (window.location !== window.parent.location) {
      this.isChild = true;
    }
  }

  buttonClicked() {
    if (this.isChild) {
      this.shellCommunicationService.notifyShellAboutAction('addMenuItem');
    }
  }
}
