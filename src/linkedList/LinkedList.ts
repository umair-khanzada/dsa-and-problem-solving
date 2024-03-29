import { Node } from './index';
import { NodeDataType } from './types';

export class LinkedList {
    private _head: Node | null | undefined;
    private _tail: Node | null | undefined;
    private _size: number;
    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    append(data: NodeDataType) {
        // If _size is 0 means this is a first element so simply call prepend.
        if(this._size === 0) this.prepend(data);
        else {
            const node = new Node(data);
            // Tail will always be available, above size check will handle for blank list.
            // @ts-ignore
            this._tail.next = node;
            this._tail = node;
            this._size += 1;
        }
    }

    prepend(data: NodeDataType) {
        const node = new Node(data);
        node.next = this._head;
        this._head = node;
        // If _size === 0 means this is a first element so head and tail both point to the same node.
        if(this._size === 0) this._tail = node;
        this._size += 1;
    }

    appendAt(data: NodeDataType, index: number) {
        if(index < 0 || index > this._size) throw new Error('Index out of bound.')
        else if(index === 0) this.prepend(data);
        else if(index === this._size) this.append(data);
        else {
            let i = 1,
            n = this._head,
            node = new Node(data);

            for(i; i < index; i++) n = n?.next;
            
            node.next = n?.next;
            // @ts-ignore
            n.next = node;
            this._size += 1;
        }
    }

    // TODO: Write a common logic to check before any operation, ie: (size of the list).
    getHead() {
        if(this._size === 0) throw new Error('List is empty.')
        else return this._head;
    }

    getTail() {
        if(this._size === 0) throw new Error('List is empty.')
        else return this._tail;
    }

    getAt(index: number) {
        if(index < 0 || index >= this._size) throw new Error('Index out of bound.')
        else if(index === 0) return this._head;
        else if(index === this._size - 1) return this._tail;
        else {
            let i = 1, n = this._head;
            for(i; i <= index; i++) n = n?.next;
            return n;
        };
    }

    getSize() {
        return this._size;
    }
}