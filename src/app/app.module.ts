import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';
// import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormioModule } from 'angular-formio';
// import { AppConfig } from './config';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AuthGuardService } from './app.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const Formio = require('formiojs').Formio;
Formio.icons = 'fontawesome';

// export const options: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    // FormioModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // NgxMaskModule.forRoot(options),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
  ],
  providers: [
    AuthGuardService,
    // { provide: FormioAppConfig, useValue: AppConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
