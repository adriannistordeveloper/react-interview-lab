// 1. remove duplicates from an array

const duplicatedArray = [1, 3, 3, 5, 'a', 'b', 'b'];

function removeDuplicates(arr: (number | string)[]){
    return [...new Set(arr)];
}

function removeDuplicatesGenerics<T>(arr: T[]): T[]{
    return [...new Set(arr)];
}

console.log(removeDuplicatesGenerics(duplicatedArray));

/* 

2. solid principles

S - single responsability p. - one job per class/function
O - open/closed p. - extend, don't modify
L - liskov p. - child is safe replacement
I - interface segregation p. - small interfaces
D - dependency inversion p. - use abstractions

3. data types

primitives/by value/immutable = null (object - historical bug), undefined, number, string, boolean, symbol, bigint
non-primitives/by reference/mutable = objects = object, array, function, date, map, set, weakmap, weakset, regexp etc.

immutable = new object on change = cannot be changed, new value means new reference
mutable = same object modified = can be changed in place

copy by value = separate copy
copy by reference = shared pointer

4. non-primitive data structures

linear static: array 
linear dynamic: linked list, stack, queue, deque
non-linear: tree, graph
key-value (hash-based): object, map, set, hash table (concept)

map =
set =

5. more on data structures

access patterns: 
queue - fifo - first in, first out
stack - lifo - last in, first out
deque - both ends (queue)

time complexity:
array:
-> access = O(1)
-> search = O(n)
-> insert/delete (end) = O(1)
-> insert/delete (mid) = O(n)

stack/queue:
-> push/pop = O(1)
-> enqueue/dequeue = O(1)

map/set:
-> get/set/add/delete: O(1) average

linked list:
-> access: O(n)
-> insert/delete: O(1) (if you have reference)

tree (BST):
-> search/insert/delete: O(log n) average

6. O(n) notation & meaning = Big O notation = time grows proportional to input size = measures growth

O(1)  → constant (best)
O(log n) → scalable (binary search)
O(n)  → linear
O(n log n) → sorting (good)
O(n²) → nested loops (bad)

O(1) -> best, constant time, does not depend on input size < O(log n) < O(n) < O(n log n) < O(n²)

7. sorting comparison
bubble sort - O(n²) - very slow - swaps adjacent elements repeatedly
*/
function bubbleSort(arr: number[]) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
/*
merge sort - O(n log n) (always) - stable, but uses extra memory - divide & conquer (split → merge)
*/
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]) {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}
/*
quick sort - average: O(n log n)/worst: O(n²), in-place (no extra memory), usually fastest in practice, pick pivot → partition
*/
const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0]; // const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.slice(1).filter(x => x <= pivot);
  const right = arr.slice(1).filter(x => x > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
};

function quickSort2(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];

  const left = arr.filter((x, i) => i !== pivotIndex && x <= pivot);
  const right = arr.filter((x, i) => i !== pivotIndex && x > pivot);

  return [...quickSort2(left), pivot, ...quickSort2(right)];
}

/* binary search - O(log n) */
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

/* HTML && CSS stuff


*/