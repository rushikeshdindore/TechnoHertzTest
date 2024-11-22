import { Component } from '@angular/core';

@Component({
  selector: 'app-new-agreement',
  templateUrl: './new-agreement.component.html',
  styleUrls: ['./new-agreement.component.css']
})
export class NewAgreementComponent {
  agreements = [
    {
      number: 'GC267',
      name: 'Sales Agreement (Export)',
      type: 'Group Companies',
      stage: 'Master',
      nature: 'Supply Agreement',
      partyName: 'Skoda Auto AS',
      year: 2023,
      from: '20/12/2023',
      to: '31/12/2023',
      originals: 'Yes',
      status: 'Published',
    },
    
    // Add more data here...
  ];
}
