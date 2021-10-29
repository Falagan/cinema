import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalStateService } from './common/global-state/global-state.service';
import { HomeModule } from './home/home.module';

function loadGlobalConfigutation(globalStateService: GlobalStateService) {
  return () => {
    const fakeMenu = {
      id: 1,
      name: 'aside',
      items: [
        { label: 'Películas', icon: 'movie', link: '/cinema/movies/list' },
        { label: 'Actores', icon: 'recent_actors', link: '/cinema/actors/list' },
        { label: 'Compañías', icon: 'business', link: '/cinema/companies/list' }
      ]
    };
    globalStateService.setSideMenuItems(fakeMenu);
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, HomeModule],
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
