
// function
// name: first
// argument: collection(number[])
function first(collection: number[]){
    if(collection == null){
        throw new Error("collection is required");
    }
    return collection[0];
}
const array = [1, 2, 3];

first(array); /*?*/

// function => type
// name: First
// argument: generics collection (number[])
type First<collection extends number[]>  = 
    collection extends number[]? collection[0]: never;

type Result = First<[1, 2, 3]>;

