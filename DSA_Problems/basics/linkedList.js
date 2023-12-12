// link list

class linkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        };

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this

    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;

    }
}

const newlinkedList = new linkedList(10);
newlinkedList.append(5);
newlinkedList.append(16);
newlinkedList.prepend(1);
newlinkedList.insert(2, 99);
newlinkedList.printList();

// console.log("linkedList :: ",newlinkedList)
