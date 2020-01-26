import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { FormioAppConfig } from 'angular-formio';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  formComponents: any;
  @ViewChild('json') jsonElement?: ElementRef;
  @Output()
  // formioEvent = new EventEmitter<FormioEvent>();
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
    this.formComponents = event.form;
    console.log(this.formComponents);
  }

  // onSubmit(submission: any) {
  //   console.log('here');
  //   console.log(submission); // This will print out the full submission from Form.io API.
  // }

}
