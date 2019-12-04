export const dfs = (node) => {
  let res = []
  if(node) {
    node = [...node]
    node.map(item => {
      res.push(item)
      let children = item.children
      if(children) {
        return res.push(...dfs(children))
      }
    })
  }
  return res
}
// 一个节点出栈同时该节点的子节点倒序入栈
export const dfs2 = node => {
  let res = []
  let stack = []
  res.push(node)
  node.children && stack.push(...[...node.children].reverse())
  while(stack.length) {
    node = stack.pop()
    res.push(node)
    node.children && stack.push(...[...node.children].reverse())
  }
  return res
}
