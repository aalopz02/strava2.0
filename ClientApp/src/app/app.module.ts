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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user.home.component';
import { UserSearch } from './search-users/user.search.component';
import { ActivityUSer} from './activity/activity.user.component';
import { UserCarrerasSub } from './user-carreras-subs/user.carreras.subs.component';
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
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    UserSearch,
    ActivityUSer,
    UserCarrerasSub
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
      { path: 'user-home', component: UserHomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'search-users', component: UserSearch },
      { path: 'activity', component: ActivityUSer },
      { path: 'user-carreras-subs', component: UserCarrerasSub }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
