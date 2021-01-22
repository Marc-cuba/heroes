import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SuperhComponent } from './components/superh/superh.component';

const APP_ROUTES: Routes = [
    { path: 'home',component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'heroe', component: HeroeComponent},
    { path: 'superh/:id', component: SuperhComponent},
    
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);



