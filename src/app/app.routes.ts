import { Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { DonadoresComponent } from './donadores/donadores.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TipsComponent } from './tips/tips.component';
import { AnimalesComponent } from './animales/animales.component';
import { UnanimalComponent } from './unanimal/unanimal.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'animales', component: AnimalesComponent},
    {path: 'acerca', component: AcercaComponent},
    {path: 'tips', component: TipsComponent},
    {path: 'donadores', component: DonadoresComponent},
    {path: 'buscador/:nombre', component: SearchComponent},
    {path: 'animal/:id', component: UnanimalComponent},

];
