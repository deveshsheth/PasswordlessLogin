import { Component } from '@angular/core';
import Cotter from 'cotter';
import { OnBeginHandler } from 'cotter/lib/binder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  success = false;
  payload = null;
  payloadString = null;
 onBegin: OnBeginHandler;
constructor() {}
  ngOnInit() {
    
    var cotter = new Cotter("4b2b966b-2f34-41a9-8db1-acba8ad03ff0");
    cotter.signInWithLink(this.onBegin).showEmailForm()
      .then((payload: object) => {
        this.success = true;
        this.payload = payload;
        this.payloadString = JSON.stringify(payload, null, 4);
      })
      .catch((err: any) => console.log(err));
  }


}
