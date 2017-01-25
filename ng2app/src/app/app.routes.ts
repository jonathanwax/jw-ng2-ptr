import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // { path: 'home', component: HomeComponent },
    {
        path: 'home', component: HomeComponent, children: [
            { path: '', component: HeaderComponent, outlet: 'top' },
            { path: '', component: ListComponent, outlet: 'side' },
            { path: '', component: DetailComponent, outlet: 'center' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
export const routingComponents = [HeaderComponent];