import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientId
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
