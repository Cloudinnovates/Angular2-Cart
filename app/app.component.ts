/**
 * Created by namita on 7/28/16.
 */

import {Component,ViewChild} from '@angular/core';
import {ChildComponent} from './cart/child.component';
import {ItemListComponent} from './items/item-list.component';
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: `
        <div class="col-md-2"></div>
         <item-list (onAdd)="onAdd($event)"></item-list>
        <child-component></child-component>
        <div class="col-md-2"></div>

    `,
    directives: [ChildComponent,ItemListComponent]
})

export class AppComponent {
    @ViewChild(ChildComponent) private childComponent:ChildComponent;

    onAdd(item){
        var itemCopy = Object.assign({},item);
        this.childComponent.addToCart(itemCopy);
    }
}