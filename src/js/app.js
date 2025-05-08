{
    // M-1
    function findIndex(arr , value) {
        return arr.indexOf(8)
    }
    console.log(findIndex([10,7,8,55,44]));
    
}
{
    // M_2
    function addToEnd(arr,value) {
        value = arr.push(5)
        return arr
    }
    console.log(addToEnd([1,2,3]));
}
{
    // M-3
    function removeLast(arr) {
        arr.pop()
        return arr
    }
    console.log(removeLast([1,2,3]));   
}
{
    // M-4
    function mergeArrays(arr1,arr2) {
        return arr1.concat(arr2)
    }
    console.log(mergeArrays([1,2,3],[4,5,6]));
}
{
    // M-5
    function sortAscending(arr) {
        return arr.sort()
    }
    console.log(sortAscending([2,9,8]));    
}
{
    // M-6
    function combineAndReverse(arr1,arr2) {
        return arr1.concat(arr2).sort((a,b)=>b-a)
    }
    console.log(combineAndReverse([1,2],[4,5]));   
}
{
    // M-7
    function LastThreeReversed(arr) {
        return arr.slice(-3).reverse().join()
    }
    console.log(LastThreeReversed([1,2,3,4,5,6]));
}
{
    // M-8
    function topThreeBiggest(arr1,arr2) {
        return arr1.concat(arr2).sort().slice(-3)
    }
    console.log(topThreeBiggest([1,7,3],[5,9,2]));
}