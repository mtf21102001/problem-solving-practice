# 02 - Merge Strings Alternately

**LeetCode:** [1768. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/) · Easy · LeetCode 75

## Problem
Given two strings `word1` and `word2`, merge them by adding letters in alternating order, starting with `word1`. If one string is longer, append its remaining letters to the end.

```js
mergeAlternately("abc", "pqr");  // "apbqcr"
mergeAlternately("ab", "pqrs");  // "apbqrs"
mergeAlternately("abcd", "pq");  // "apbqcd"
```

## Approach - Two pointers
- Keep one pointer for each word (`i` and `j`).
- Loop **while either word still has letters** (`||`, not `&&`), so the loop does not stop when the shorter word ends.
- In each step, add the next letter from `word1` if it exists, then the next letter from `word2` if it exists.
- Return the merged result.

## Complexity
- Time: O(n + m), every letter is visited once
- Space: O(n + m) for the result