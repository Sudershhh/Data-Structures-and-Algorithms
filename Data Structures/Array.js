class myArray
{
    constructor()
    {
        this.length=0;
        this.data = {};
    }

    push(item)
    {
        this.data[this.length]=item;
        this.length+=1;
    }

    pop()
    {
        delete this.data[this.length-1];
        this.length-=1;
    }

    delete(index)
    {
        const item = this.data[index]
        this.shiftItems(index)
    }

    shiftItems(index)
    {
        for(let i=index;i<this.length-1;i++)
        {
            this.data[i] = this.data[i+1];

        }
        delete this.data[this.length-1];
        this.length-=1;
    }

}

const newArray = new myArray()
console.log(newArray);
newArray.push('One Piece')
newArray.push('Naruto')
newArray.push('Bleach')
console.log(newArray);
newArray.pop()
console.log(newArray)
newArray.push('DBZ')
newArray.delete(1)
console.log(newArray)


// let array = [1,2,3,4,5];

// //Append an item to an array
// array.push(6)  //O(1)

// //Remove the last item from an array
// array.pop()   //O(1)

// //Add an element to the start of the array
// array.unshift(0)    //O(N)

// //Remove one element from the start of the array
// array.shift()       //O(N)



// //Remove multiple items from the array
// const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
// const start = 2;
// const removedItems = fruits.splice(start);
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItems);
// // ["Strawberry", "Mango", "Cherry"]

