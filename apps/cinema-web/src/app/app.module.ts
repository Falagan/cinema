import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalStateService } from './common/global-state/global-state.service';
import { NotifierConfig } from './common/notifier/notifier-config';
import { HomeModule } from './home/home.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

function loadGlobalConfigutation(globalStateService: GlobalStateService) {
  return () => {
    // Aside Menu
    globalStateService.setSideMenuItems();
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    NotifierModule.withConfig(NotifierConfig),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],

  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadGlobalConfigutation,
      multi: true,
      deps: [GlobalStateService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
