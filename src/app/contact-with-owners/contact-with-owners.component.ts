import {Component, OnInit} from '@angular/core';
import {ContactService} from "./contact.service";

@Component({
    selector: 'app-contact-with-owners',
    templateUrl: './contact-with-owners.component.html',
    styleUrls: ['./contact-with-owners.component.css']
})
export class ContactWithOwnersComponent implements OnInit {
    messageList;
    userMessage;
    sendMessage;

    constructor(private contactService: ContactService) {
    }

    ngOnInit() {
        this.messageList = this.contactService.data;

        this.sendMessage = function () {
            if (this.userMessage) {
                let newMessage = {
                    id: 4,
                    senderId: '4',
                    owner: 'محسنی',
                    message: this.userMessage,
                    date: '1396/02/09 , 9:36',
                    imageUrl: 'assets/img/faces/profile4.png'
                };
                this.contactService.data.push(newMessage);
                this.userMessage = '';
            }
        };

    }


    sendByEnter(event) {
        if (event.keyCode === 13) {
            this.sendMessage();
        }
    }
}
