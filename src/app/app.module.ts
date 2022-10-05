import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddSenderComponent } from './components/add-sender/add-sender.component';
import { ListSenderComponent } from './components/list-sender/list-sender.component';
import { DelSenderComponent } from './components/del-sender/del-sender.component';
import { AddParcelComponent } from './components/add-parcel/add-parcel.component';
import { ListParcelComponent } from './components/list-parcel/list-parcel.component';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseService } from './database.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {path: 'addSender', component: AddSenderComponent},
  {path: 'listSender', component: ListSenderComponent},
  {path: 'delSender', component: DelSenderComponent},
  {path: 'addParcel', component: AddParcelComponent},
  {path: 'listParcel', component: ListParcelComponent},
  {path: '', component: HomepageComponent},
  {path: '**', component: ErrorpageComponent},];

@NgModule({
  declarations: [
    AppComponent,
    AddSenderComponent,
    ListSenderComponent,
    DelSenderComponent,
    AddParcelComponent,
    ListParcelComponent,
    HomepageComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    // useHash = it will only pass the link before the hash to the backend, after the hash will be in the frontend
    RouterModule.forRoot(appRoutes, {useHash:true}),
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
