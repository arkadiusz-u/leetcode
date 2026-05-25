// O(n^2) time complexity
// O(1) space complexity
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

    throw new Error('No solution found');
};

// O(n) time complexity
// O(n) space complexity
function twoSumOptimal(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [i, map.get(complement)!]
        } else {
            map.set(nums[i], i)
        }
    }

    throw new Error('No solution found');
};
