/* link:  https://www.nowcoder.com/practice/e8a1b01a2df14cb2b228b30ee6a92163?tpId=13&tqId=23271&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking&sourceUrl=

*/

// function MoreThanHalfNum_Solution(numbers) {
//     if (numbers && numbers.length > 0) {
//         let length = numbers.length;
//         let temp = {};
//         let count = 0;
//         let element = null;
//         for (let i = 0; i < length; i++) {
//             if (temp['s' + numbers[i]]) {
//                 temp['s' + numbers[i]]++;
//             } else {
//                 temp['s' + numbers[i]] = 1;
//             }

//             if (temp['s' + numbers[i]] > length / 2)
//                 return numbers[i]
//         }

//         return 0
//     }
// }


function majorityElement(nums) {
    if (nums && nums.length > 0) {
        let length = nums.length;
        let count = 0;
        let element = null;
        for (let i = 0; i < length; i++) {
            if (count === 0) {
                element = nums[i];
                count = 1;
            } else if (nums[i] === element) {
                count++;
            } else {
                count--;
            }
        }
        if (count > 0)
            return element;
    }
}



result = majorityElement([1, 2, 3, 1, 1])
console.log(result);