import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
    data;
    login = false;
    @ViewChild('f') signupForm: NgForm;
    user = {
        username: ''
        ,
        password: ''
    };

    onsubmit() {
        this.user.username = this.signupForm.value.username;
        this.user.password = this.signupForm.value.password;
        this.signupForm.reset();
        this.data = this.http.get('http://localhost:4200/assets/data/data.json')
            .map((res: any) => res.json()).subscribe(data => {
                console.log(data);
                console.log(data[0].username);
                for (let i = 0; i < data.length; i++) {
                    if (this.user.username === data[i].username && this.user.password === data[i].password) {
                        this.login = true;
                        break;
                    }
                }
                if (this.login) {
                    this.router.navigate(['dashboard']);
                } else {
                    alert('errorrr');
                }
            }, err => {
                console.log(err);
            });
    }


    constructor(private http: Http, private router: Router) {
    }

    ngOnInit() {

    }


}









