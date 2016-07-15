import { Component }       from '@angular/core';
import {Http, HTTP_PROVIDERS,Headers} from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Component({
    selector: 'home',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'app/home/home.html'
})
export class HomeComponent {
    
    public service;
    constructor(http: Http){
        this.service = http.get('/api/v1/home')
            .subscribe(
                   // data => this.service = JSON.parse(data._body),
                    () => console.log('Call Complete1')
            ); 
    } 
   
}