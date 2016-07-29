/**
 * Created by namita on 7/28/16.
 */

import {Component} from '@angular/core';
import {ChildComponent} from './cart/child.component';
import {ItemListComponent} from './items/item-list.component';
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: `
        <child-component></child-component>
        <item-list></item-list>
    `,
    directives: [ChildComponent,ItemListComponent]
})

export class AppComponent {
}