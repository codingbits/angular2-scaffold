import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {FontComponent} from './templates/font.component';
import {ColorComponent} from './templates/colors.component';
import {IconComponent} from './templates/icon.component';

@Component({
    selector: 'app',
    template: `
         <header></header>
         <router-outlet></router-outlet>
    `,
    directives: [HeaderComponent,
                 HomeComponent,
                 FontComponent,
                 ColorComponent,
                 IconComponent,
                 ROUTER_DIRECTIVES],
    providers: [
      ROUTER_PROVIDERS
    ]
})
@RouteConfig([
   {path: '/', name: 'Home',  component: HomeComponent},
   {path: '/font', name: 'Font', component: FontComponent},
   {path: '/colors', name: 'Color', component: ColorComponent},
   {path: '/icon', name: 'Icon', component: IconComponent}
])
export class AppComponent {

}