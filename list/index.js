function List() {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
  this.clear = clear
  this.find = find
  this.toString = toString
  this.insert = insert
  this.append = append
  this.remove = remove
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.length = length
  this.currPos = currPos
  this.moveTo = moveTo
  this.getElement = getElement
  this.contains = contains
  this.hasNext = hasNext
  this.hasPrev = hasPrev

  function append(element) {
    this.dataStore[this.listSize++] = element
  }

  function find(element) {
    return this.dataStore.indexOf(element)
  }

  function remove(element) {
    const index = this.find(element)
    if (index === -1) return false
    this.dataStore.splice(index, 1)
    this.listSize--
    return true
  }

  function length() {
    return this.listSize
  }

  function toString() {
    return this.dataStore.toString()
  }
  function clear() {
    this.listSize = 0
    this.dataStore.lenth = this.pos = 0
  }
  function insert(element, after) {
    const index = this.find(after)
    if (index === -1) return false
    this.dataStore.splice(index, 0, element)
    this.listSize++
    return true
  }
  function front() {
    this.pos = 0
  }
  function end() {
    this.pos = this.listSize - 1
  }
  function prev() {
    --this.pos
  }
  function next() {
    if (this.pos < this.listSize) {
      ++this.pos
    }
  }
  function hasNext() {
    return this.pos < this.listSize
  }
  function hasPrev() {
    return this.pos >= 0
  }
  function currPos() {
    return this.pos
  }
  function moveTo(position) {
    this.pos = position
  }
  function getElement() {
    return this.dataStore[this.pos]
  }
  function contains(element) {
    return dataStore.includes(element)
  }
}

const list = new List()

for (let i = 0; i < 10; i++) {
  list.append(i)
}

for (list.front(); list.hasNext(); list.next()) {
  console.log(list.getElement())
}
