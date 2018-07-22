let map = new Map();
function aclean(arr){
    for(let word of arr){
      let sort = word.toLowerCase().split('').sort().join('')
      map.set(sort, word)
    }
    return Array.from(map.values())
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr))



