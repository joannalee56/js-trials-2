'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}
printIndices(['apple', 'berry', 'cherry'])


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  
  for (let i = 0; i < items.length; i += 1) {
    if (i % 2 === 0){
      result.push(i);
    }
  }
  return result;
}

console.log(everyOtherItem([0, 1, 2, 3, 4, 5]))


// 3. smallestNItems
function smallestNItems(items, n) {

  const sortedItems = items.sort((a, b) => a - b)
  const sortedNitems = sortedItems.slice(0, n)
  sortedNitems.reverse()

  console.log(sortedNitems)

}

smallestNItems([1, 30, 4, 21, 100000, 3], 3)