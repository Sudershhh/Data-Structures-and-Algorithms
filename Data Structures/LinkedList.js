class Node
{
    constructor(value)
    {
        this.value = value
        this.next = null;
    }
}

class LinkedList
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
        this.tail.next = node;    
        this.tail = node;
        this.length+=1;
    }

    prepend(value)
    {
        let node = new Node(value)
        node.next = this.head
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
            let subordinate = currentNode.next
            newNode.next = subordinate
            currentNode.next=newNode
            this.length+=1;
        }

    }

    remove(index)
    {

        if(index===0)
        {
            this.head= this.head.next
        }
        else if(index>=this.length-1)
        {
            //LAST ELEMENT REMOVAL - ADJUST TAIL
            console.log('INSIDE FUNCTION')
            let leadingPointer = this.traverseToIndex(index-1)
            console.table(leadingPointer)
            leadingPointer.next = null

            this.tail = leadingPointer;
        }
        else
        {
            let leadingPointer= this.traverseToIndex(index-1)
            let unWantedNode = leadingPointer.next
            leadingPointer.next = unWantedNode.next

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


let myLinkedList = new LinkedList(2)
myLinkedList.prepend(1)
myLinkedList.append(3)
myLinkedList.append(4)

// let tempNode = myLinkedList.head
// myLinkedList.reverseRecursive(tempNode)
// tempNode = myLinkedList.head
// myLinkedList.reverseRecursive(tempNode)
myLinkedList.reverse()
console.table(myLinkedList)

myLinkedList.printList()




// myLinkedList.insert(2,1000)
// myLinkedList.insert(3,2000)
// myLinkedList.insert(8,19104)
// myLinkedList.append(0)
// myLinkedList.remove(7)
// console.table(myLinkedList)
// myLinkedList.remove(1)
// console.log(myLinkedList)

