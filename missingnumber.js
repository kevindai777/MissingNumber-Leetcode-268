//Objective is to find the missing consecutive positive number in a 1-D array.

let arr = [3,0,1]


//O(n) solution that uses a hashset to keep track of all unique numbers.
//Then it uses a second pass to find the missing consecutive number.

let set = new Set()

for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
        set.add(arr[i])
    }
}

for (let i = 0; i < arr.length + 1; i++) {
    if (!set.has(i)) {
        return i
    }
}


//O(n) bit-manipulation solution where n is the number of elements in the list, and uses O(1) space

let ans = nums.length 

for (i = 0; i < nums.length; i++) {
    ans ^= i ^ nums[i]
}

return ans
