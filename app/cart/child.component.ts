/**
 * Created by namita on 7/28/16.
 */

import {Component} from '@angular/core';
import {Item} from '../items/item';


@Component({
    selector: 'child-component',
    template: `
    <div class="fRight">
        <h2>Cart</h2>
        <div>
            <ul class="items">
                <li *ngFor="let item of items">
                    <span class="text">{{item.name}}</span>
                    <span class="text">{{item.quantity}}</span>
                </li>
            </ul>
        </div>
    </div>
    `
})

export class ChildComponent {
    private items:Item[] = [];
    private obj:Object = {};
    addToCart(item){
        var _this = this;
        if(_this.obj[item.id]){
            _this.obj[item.id]+=1;
            _this.items.forEach(function(value,key){
                if(value.id==item.id){
                    value.quantity = _this.obj[item.id];
                }
            })
        }else{
            _this.obj[item.id] = 1;
            item.quantity = _this.obj[item.id];
            _this.items.push(item);
        }
    }

}