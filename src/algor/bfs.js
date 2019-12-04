export const bfs = node => {
  let res = []
  if(node) {
    res.push(...node)
    node.map(item => {
      let children = item.children
      if(children) {
        children = [...children]
        return res.push(...bfs(children))
      }
    })
  }
  return res
}

// 维持一个队列，当前节点出队列时将其子节点顺序加入队列尾部
export const bfs2 = node => {
  let res = []
  let list = []
  res.push(node)
  node.children && list.push(...node.children)
  while(list.length) {
    node = list.shift()
    res.push(node)
    node.children && list.push(...node.children)
  }
  return res
}
