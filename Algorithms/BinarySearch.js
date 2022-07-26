let arr = [1,2,3,4,5,6,7,8];

let target =7;

low = arr[0]
high = arr[arr.length-1]


function binarySearch(arr,low,high)
{

        let mid = Math.floor((low+high)/2)
        if(target <arr[mid])
        {
            
            binarySearch(arr.slice(0,mid+1))
        }
        binarySearch()
    
}