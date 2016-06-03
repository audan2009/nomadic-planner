import { Injectable } from '@angular/core';

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

    items() {
        return this._items;
    }

    clearItems() {
        this._items = [];
    }

    addItem(item: Item) {
        return this._items.push(item);
    }
}
