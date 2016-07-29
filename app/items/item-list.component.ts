/**
 * Created by namita on 7/29/16.
 */

import {Component, EventEmitter, Output} from '@angular/core';
import {ItemService} from './item.service';
import {Item} from './item';

@Component({
    selector: 'item-list',
    template: `
    <div class="fLeft">
        <h2>Items</h2>
         <div>
            <ul class="items">
                <li *ngFor="let item of items">
                    <span class="text">{{item.name}}</span>
                    <span class="glyphicon glyphicon-plus" (click)="addToCart(item)"></span>
                </li>
            </ul>
        </div>
    </div>
    `,
    providers:<any>[ItemService]
})

export class ItemListComponent {
    constructor(private _itemService:ItemService) {
        //should be moved to ngOnInit lifecycle hook
        this.getItems();
    }
    @Output() onAdd = new EventEmitter<Item>();

    private items:Item[] = [];
    private errorMessage:any = '';

    getItems() {
        this._itemService.getData()
            .subscribe(
                items => this.items = items,
                error => this.errorMessage = <any>error);
    }

    addToCart(item){
        this.onAdd.emit(item);
    }


}