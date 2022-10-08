const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

// 1)  O(n) time | O(1) space - where n is the length of array.

// let arrIdx = 0
// let seqIdx = 0;

// while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) arrIdx++;
//     seqIdx++;
// }
// console.log(seqIdx === sequence.length);

// 2) O(n) time | O(1) space

let seqIdx = 0;

for (let value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
}
console.log(seqIdx === sequence.length);