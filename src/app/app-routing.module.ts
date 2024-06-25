import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalesComponent } from './animales/animales.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './acerca/acerca.component';
import { DonadoresComponent } from './donadores/donadores.component';
import { TipsComponent } from './tips/tips.component';
import { SearchComponent } from './search/search.component';
import { UnanimalComponent } from './unanimal/unanimal.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginEmailComponent } from './login-email/login-email.component';
import { LoginPhoneComponent } from './login-phone/login-phone.component';
import { RegisterComponent } from './register/register.component';
import { GraficasComponent } from './graficas/graficas.component';

const routes: Routes = [
  { path: 'animales', component: AnimalesComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'create-user', component: CreateUserComponent },
    { path: 'login-email', component: LoginEmailComponent },
    { path: 'login-phone', component: LoginPhoneComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'graficas', component: GraficasComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }