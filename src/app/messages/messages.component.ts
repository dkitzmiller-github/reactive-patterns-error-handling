import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MessagesService} from '../services/messages.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {

  errors$: Observable<string[]> = Observable.of();

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$;
  }

  close() {
    console.log('MessagesComponent: close()');
    this.messagesService.error();
  }

}
