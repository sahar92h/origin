import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

declare const $: any;

declare interface RouteInfo {
    path?: string;
    title: string;
    icon: string;
    class: string;
    childrens?: object;
    showChildrens: boolean;
}

export const ROUTES: RouteInfo[] = [
    {path: 'dashboard', title: 'داشبورد', icon: 'dashboard', class: '', showChildrens: false},
    {path: 'table-list', title: 'مشخصات ساختمان', icon: 'location_city', class: '', showChildrens: false},
    {path: 'user-profile', title: 'ثبت و مشخصات واحدها', icon: 'person_add', class: '', showChildrens: false},
    {path: 'typography', title: 'ارتباط با مالکین', icon: 'chat', class: '', showChildrens: false},
    {path: 'financial', title: 'مالی', icon: 'monetization_on', class: '', showChildrens: false,
        childrens: [
            {title: 'مدیریت هزینه ها', icon: '', class: ''},
            {title: 'مدیریت درآمد ها', icon: '', class: ''},
            {title: 'وضعیت شارژ ساکنین', icon: '', class: ''},
            {title: 'موجودی فعلی', icon: '', class: ''},
            {title: 'وضعیت قبوض', icon: '', class: ''}
        ]
    },
    {path: 'payments', title: 'پرداختی ها', icon: 'content_paste', class: '', showChildrens: false,
        childrens: [
            {title: 'پرداخت شارژ', icon: '', class: ''},
            {title: 'پرداخت هزینه', icon: '', class: ''},
            {title: 'پرداخت قبوض', icon: '', class: ''}
        ]
    },
    {path: 'icons', title: 'اخبار و اطلاعیه', icon: 'library_books', class: '', showChildrens: false},
    {path: 'maps', title: 'صدور رسید پرداخت', icon: 'playlist_add_check', class: '', showChildrens: false},
    {path: 'notifications', title: 'تعریف کاربر و سطح دسترسی', icon: 'vpn_key', class: '', showChildrens: false},
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }


    givePath(item) {

        if (item.path !== 'no') {
            return item.path;
        }

    }

    openChildrens(item) {
        for (let i = 0; i < ROUTES.length; i++) {
            ROUTES[i].showChildrens = false;
        }
        if (item.childrens) {

            item.showChildrens = true;
        }
    }


    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
