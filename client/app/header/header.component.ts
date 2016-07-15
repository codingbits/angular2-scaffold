import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'header',
    templateUrl: 'app/header/header.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
    //console.log("Test"); 
}
