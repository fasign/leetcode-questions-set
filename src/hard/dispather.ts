interface Task {
  duetime: number
  cb: Function
}

interface Fiber {
  dirty?: boolean
  tag: string
  type: string | Fiber
  cbs: Function[]
}

type schedulerCbType =
  | boolean
  | null
  | ((val: boolean) => boolean | null)

let taskList: Task[] = []

let fiberList = []

let currentTask: Task | undefined
let currentFiber: Fiber | undefined
let currentUpdatingFiber: Fiber | undefined

const frameLength = 1
let frameEnd = 0

function schedulerCb (isTimeout: boolean): boolean | schedulerCbType {
  if(!currentFiber) currentFiber = fiberList.shift()
  while(currentFiber && (isTimeout || !isOverRendering())) {
    currentFiber = reconciler(currentFiber)
  }
  
  if(currentFiber && !isTimeout) {
    console.log('timeout========');
    reconciler(currentFiber)
    return schedulerCb as schedulerCbType
  }
  return null
}
// diff and update data
function reconciler(fb: Fiber): Fiber | null {
  const cb = fb.cbs.shift()
  if(cb) {
    cb()
    return fb
  } else {
    return null
  }
}

function scheduler(cb) {
  const timeout = 3000
  let task = {
    duetime: getTime() + timeout,
    cb
  }
  taskList.push(task)
  flush()
}

function flush() {
  frameEnd = getTime() + frameLength
  currentTask = getTask()
  let isTimeout = currentTask.duetime <= getTime()
  while(currentTask && !(!isTimeout && isOverRendering())) {
    isTimeout = currentTask.duetime <= getTime()
    // 数据出口
    const next = currentTask.cb(isTimeout)
    if(next) {
      currentTask.cb = next
    } else {
      taskList.shift()
      currentTask = getTask()
    }
  }
  console.log('currentTask', currentTask);
  currentTask&&setTimeout(flush, 1000)
}

function getTask(): Task {
  return taskList.sort((a, b) => a.duetime - b.duetime)[0]
}

function isOverRendering(): boolean {
  return getTime() >= frameEnd
}

function getTime(): number {
  return performance.now()
}

let log = function (i) {
  console.log(`list-${i}`);
}

function createCbs(len) {
  let cbs = []
  while(len--) {
    cbs.push(log.bind(null, len))
  }
  return cbs
}

let fb = {
  tag: 'list',
  type: 'log_list',
  cbs: createCbs(1000)
}

function main(fiber) {
  if(!fiber.dirty) {
    fiber.dirty = true
    fiberList.push(fiber)
  }
  scheduler(schedulerCb)
}

main(fb)