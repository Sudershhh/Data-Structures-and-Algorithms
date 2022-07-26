class HashTable
{

    constructor(length)
    {
        this.data = new Array(length)
    }


    _hash(key)
    {
        let hash =0;
        for(let i =0 ; i<key.length;i++)
        {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }



    get(key)
    {

        let address = this._hash(key)
        let currentBucket = this.data[address]
        if(currentBucket)
        {

            for(let i=0;i<currentBucket.length;i++)
            {
                if(currentBucket[i][0]===key)
                {
                    
                    return currentBucket[i][1]
                    
    
                }
            }
        }
        return "No Such Value"
    }

    set(key,value)
    {
        let address = this._hash(key)
        if(!this.data[address])
        {
            this.data[address]=[]
        }
        this.data[address].push([key,value])
        return this.data
    }


    keys()
    {
        
        if(!this.data.length)
        {
            return undefined;
        }

        let keyArray=[]
        for(let i=0;i<this.data.length;i++)
        {
            if(this.data[i] && this.data[i].length)
            {                
                console.log(this.data[i])  
                if(this.data[i].length>1)
                {
                    for(let j=0;j<this.data[i].length;j++)
                    {
                        keyArray.push(this.data[i][j][0])
                    }
                } 
                else{

                    keyArray.push(this.data[i][0][0])
                }
                
            }
        }
        return keyArray
    }

    values()
    {
        if(!this.data.length)
        {
            return undefined;
        }

        let valueArray=[]
        for(let i=0;i<this.data.length;i++)
        {
            if(this.data[i] && this.data[i].length)
            {                
                console.log(this.data[i])  
                if(this.data[i].length>1)
                {
                    for(let j=0;j<this.data[i].length;j++)
                    {
                        valueArray.push(this.data[i][j][1])
                    }
                } 
                else{

                    valueArray.push(this.data[i][0][1])
                }
                
            }
        }
        return valueArray
    }


}

let hash1 = new HashTable(10)
hash1.set('MSCS',56789)
hash1.set('MSC',5678)
hash1.set('MS',567)
hash1.set('M',99)
hash1.set('p',5)
console.log(hash1.data)
// console.log(hash1.get('M'))
console.log(hash1.values())