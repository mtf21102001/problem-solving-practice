function mergeAlternately(word1: string, word2: string): string {
let result = ''
let i = 0
let j = 0
while(i <word1.length || j < word2.length){
    if(i < word1.length) result += word1[i++]
    if(j < word2.length) result += word2[j++]
}
return result
}

console.log(mergeAlternately("abc", "pqr")); // "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // "apbqcd"

module.exports = mergeAlternately;