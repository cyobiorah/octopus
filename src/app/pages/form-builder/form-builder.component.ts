import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormioAppConfig } from 'angular-formio';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  @ViewChild('json') jsonElement?: ElementRef;
  public form: Object = {
    components: []
  };

  // onChange(event) {
  //   console.log(event.form);
  // }

  constructor(
    public config: FormioAppConfig,
  ) { }

  ngOnInit() {
  }

  // onChange(event) {
  //   this.jsonElement.nativeElement.innerHTML = '';
  //   this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  // }

  onChange(event) {
    console.log('here');
    console.log(event);
  }

}
