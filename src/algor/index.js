import {wordBreak} from './word-break'
import {dfs2} from './dfs'
import {bfs2} from './bfs'
import {numDecodings} from './decode-way'
import {climb} from './climb'
import {heapSort} from './heapSort'


let el = document.querySelector('.root')
let res = dfs2(el)
console.log('dfs2:', res)
res = bfs2(el)
console.log('bfs2:', res)

res = numDecodings('2301')
console.log('numDecodings:', res)


res = climb('1')
console.log('climb: ', res)
let s = 'ciasc1cis'
let dir = ['iasc', 'asc', '1', 'ci', 'cis']

res = wordBreak(s, dir)
console.log(res)


heapSort([3,2,1,9,8,5,4,6,7])


// router((from, to, next) => {
//   if(from.name === "home") {
//     next({name:'login'})
//   } else {
//     next()
//   }
// })