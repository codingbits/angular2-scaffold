// import {bootstrap} from 'angular2/platform/browser';
// import {AppComponent} from "./app.component";
// import {ROUTER_PROVIDERS} from 'angular2/router';
// import {APP_BASE_HREF} from 'angular2/platform/common';
// import {provide} from 'angular2/core';

// //noinspection TypeScriptValidateTypes
// bootstrap(AppComponent,[
//     ROUTER_PROVIDERS,
//     provide(APP_BASE_HREF, {useValue : '/' })
// ]);


import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
bootstrap(AppComponent);
