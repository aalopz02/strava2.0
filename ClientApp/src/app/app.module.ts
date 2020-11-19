import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CarreraComponent } from './nueva-carrera/newCarrera.component';
import { modificarCarreraComponent } from './modificar-carrera/modificarCarrera.component';
import { RetosMainComponent } from './retos-main/retos-main.component';
import { RetosCreateComponent } from './retos-create/retos-create.component';
import { RetosListComponent } from './retos-list/retos-list.component';
import { RetosModifyComponent } from './retos-modify/retos-modify.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GruposCreateComponent } from './grupos-create/grupos-create.component';
import { GruposListComponent } from './grupos-list/grupos-list.component';
import { GruposModifyComponent } from './grupos-modify/grupos-modify.component';
import { InscCarreraComponent } from './insc-carrera/insc-carrera.component';
import { InscRetoComponent } from './insc-reto/insc-reto.component';
import { GruposMainComponent } from './grupos-main/grupos-main.component';
import { UserRetosSubsComponent } from './user-retos-subs/user-retos-subs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CarreraComponent,
    RetosMainComponent,
    RetosModifyComponent,
    RetosListComponent,
    RetosCreateComponent,
    modificarCarreraComponent,
    GruposCreateComponent,
    GruposListComponent,
    GruposModifyComponent,
    InscCarreraComponent,
    InscRetoComponent,
    GruposMainComponent,
    UserRetosSubsComponent
  ],
  imports: [

  BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'nueva-carrera', component: CarreraComponent },
      { path: 'modificar-carrera', component: modificarCarreraComponent },
      { path: 'retos', component: RetosMainComponent },
      { path: 'modificar-retos', component: RetosModifyComponent },
      { path: 'retos-nuevo', component: RetosCreateComponent },
      { path: 'retos-list', component: RetosListComponent },
      { path: 'grupos-nuevo', component: GruposCreateComponent},
      { path: 'grupos-list', component: GruposListComponent },
      { path: 'grupos-modify', component: GruposModifyComponent },
      { path: 'insc-reto', component: InscRetoComponent },
      { path: 'insc-carrera', component: InscCarreraComponent },
      { path: 'grupos', component: GruposMainComponent },
      { path: 'user-retos', component: UserRetosSubsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
