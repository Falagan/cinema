import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BlockTemplateComponent } from '@cinema/lib-cinema';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NotifierModule } from 'angular-notifier';
import { BlockUIModule } from 'ng-block-ui';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalStateService } from './common/global-state/global-state.service';
import { AuthInterceptor } from './common/interceptors/auth';
import { NotifierConfig } from './common/notifier/notifier-config';
import { HomeModule } from './home/home.module';

function LoadGlobalConfigutation(globalStateService: GlobalStateService) {
  return () => {
    // Aside Menu
    globalStateService.setSideMenuItems();
    // Cached User Session
    globalStateService.getUserSessionFromSessionStorage();
  };
}

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    // Notifier
    NotifierModule.withConfig(NotifierConfig),
    // Block Screen
    BlockUIModule.forRoot({ template: BlockTemplateComponent }),
    // PWA
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    // Translations
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: LoadGlobalConfigutation,
      multi: true,
      deps: [GlobalStateService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
