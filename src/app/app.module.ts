import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MapsComponentComponent } from './components/maps-component/maps-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, MapsComponentComponent, NavbarComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBx5ytr9h3PDMjZ3vkBRgFUUKhY45A8gAM',
      libraries: ['places'],
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
