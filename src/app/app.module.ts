import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor} from './intercepter/AuthInterceptor';
import {ApiModule, BASE_PATH, Configuration} from './service';
import { environment } from 'src/environments/environment';

export function ConfigurationFactory() {
  return new Configuration({apiKeys:{}});
  
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ApiModule.forRoot(ConfigurationFactory)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: BASE_PATH, useValue: environment.baseUrl}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
