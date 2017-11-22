import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';

declare const $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public href = '';

    constructor(public location: Location, private router: Router) {

    }

    ngOnInit() {
        $.material.options.autofill = true;
        $.material.init();
    }

    checkUrl() {
        this.href = this.router.url;
        if (this.href === '/login') {
            return false;
        } else {
            return true;
        }
    }

    isMaps(path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        } else {
            return true;
        }
    }
}
