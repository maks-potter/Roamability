import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {OperatorsComponent} from './operators/operators.component';
import {OperatorsService} from './shared/services/operators.service';
import {OperatorDetailComponent} from './operator-detail/operator-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent,
    OperatorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    OperatorsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
