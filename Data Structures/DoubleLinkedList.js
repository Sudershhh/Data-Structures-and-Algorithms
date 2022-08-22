class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList
{
    constructor(value)
    {
        
        this.head = new Node(value)
        this.tail = this.head
        this.length=1
    }

    append(value)
    {
        let node =  new Node(value)
        node.prev = this.tail
        this.tail.next = node;    
        this.tail = node;
        this.length+=1;
    }

    prepend(value)
    {
        let node = new Node(value)
        node.next = this.head
        this.head.prev = node
        this.head = node
        this.length+=1 
    }


    printList()
    {
        const array=[]
        let tempNode = this.head
        while(tempNode!=null)
        {
            array.push(tempNode?.value)
            tempNode = tempNode.next
        }
        console.log(array)
    }

    traverseToIndex(index)
    {
        let currentNode = this.head
        let counter = 0;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
          }
        return currentNode
    }


    insert(index,value)
    {

        if(index ===0)
        {
            this.prepend(value)
        }
        else if(index >=this.length)
        {
            this.append(value)
        }
        else
        {

            let newNode = new Node(value)
            let currentNode = this.traverseToIndex(index-1)    

            let futureNode = currentNode.next
            currentNode.next = newNode
            newNode.prev = currentNode
            newNode.next = futureNode
            futureNode.prev = newNode
            this.length+=1;
        }

    }

    remove(index)
    {
        if(index===0)
        {
            this.head= this.head.next
            this.head.prev=null
        }
        else if(index>=this.length-1)
        {
            //LAST ELEMENT REMOVAL - ADJUST TAIL
            console.log('INSIDE FUNCTION')
            let leadingPointer = this.traverseToIndex(index-1)
            console.table(leadingPointer)
            leadingPointer.next = null
            this.tail.prev=null
            this.tail = leadingPointer;
        }
        else
        {
            let leadingPointer= this.traverseToIndex(index-1)
            let unWantedNode = leadingPointer.next
            unWantedNode.prev = null
            leadingPointer.next = unWantedNode.next
            unWantedNode.next.prev = leadingPointer

        }
        this.length--;
    }


    reverse()
    {
        //mutate the linkedlist
        let previousNode = null;
        let currentNode = this.head
        let next = currentNode.next;    

        while(currentNode!=null)
        {
            currentNode.next = previousNode
            previousNode = currentNode
            currentNode = next
            if(next!=null)
            {
                next = next.next
                this.tail = next
                continue
            }
            this.tail = currentNode
        }

        this.head = previousNode;

    }

    reverseRecursive(node)
    {

        if(node==this.tail)
        {

            this.head=this.tail;
            return; 
        }
        console.log('----------------')
        console.table(node)
        this.reverseRecursive(node.next)

        this.tail.next=node
        this.tail=node
        this.tail.next=null;


    }

}


let myLinkedList = new DoublyLinkedList(2)
myLinkedList.prepend(1)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.insert(3,9)
myLinkedList.remove(5)
myLinkedList.remove(2)
console.table(myLinkedList)

// let tempNode = myLinkedList.head
// myLinkedList.reverseRecursive(tempNode)
// tempNode = myLinkedList.head
// myLinkedList.reverseRecursive(tempNode)
// myLinkedList.reverse()
// console.table(myLinkedList)

// myLinkedList.printList()




