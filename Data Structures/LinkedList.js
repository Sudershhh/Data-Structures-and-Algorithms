class LinkedList
{

    constructor(value)
    {
        
        this.head ={
            value:value,
            next:null
        }

        this.tail = this.head
        this.length=1
    }

    append(value)
    {
        let node = {
            value,
            next:null
        }
        this.tail.next = node;    
        this.tail = node;
        this.length+=1;
    }

    prepend(value)
    {
        let node = {
            value,
            next:this.head
        }
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
            for(let i=0;i<index-1;i++)
            {
                currentNode = currentNode.next
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

            let newNode = {
                value,
                next:null
            }

            let currentNode = this.traverseToIndex(index)    
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
        else
        {
            let leadingPointer= this.traverseToIndex(index)
            let unWantedNode = leadingPointer.next
            leadingPointer.next = unWantedNode.next
        }
        this.length--;
    }
}


let myLinkedList = new LinkedList(10)
myLinkedList.prepend(99)
myLinkedList.append(11)
myLinkedList.append(66)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.append(8)
myLinkedList.append(0)
myLinkedList.append(4)
myLinkedList.append(1)
myLinkedList.insert(2,1000)
myLinkedList.insert(3,2000)
myLinkedList.insert(4,3000)
myLinkedList.printList()
myLinkedList.remove(4)
myLinkedList.remove(1)
myLinkedList.remove(2)
myLinkedList.printList()
// console.log(myLinkedList)