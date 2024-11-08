{
//
function removeDuplicates(arr:number[]):number[] {
            return arr.filter (function(element,index){
                        return arr.indexOf(element)===index
            })
}

const result2=removeDuplicates([1, 2, 2, 3, 4, 4, 5])

console.log(result2);
//
}