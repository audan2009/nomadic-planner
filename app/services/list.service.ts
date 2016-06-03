import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

export interface Item {title: string, note: string, icon: string};

@Injectable()
export class ListService {
    _icons: string[] = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    _items: Array<Item> = [];

    icons() {
        return this._icons;
    }

    chooseIcon() {
        return this._icons[Math.floor(Math.random() * this._icons.length)];
    }

    getItems() {
        setTimeout(() => {
            for(let i = 1; i < 11; i++) {
              this.addItem({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.chooseIcon()
              });
            }
        }, 250)
    }

    items() {
        return Observable.of(this._items);
    }

    clearItems() {
        this._items = [];
    }

    addItem(item: Item) {
        return this._items.push(item);
    }
}
