// 933. 最近的请求次数
// https://leetcode-cn.com/problems/number-of-recent-calls/
class RecentCounter {
  constructor() {
    this.queue = []
  }

  ping(t) {
    this.queue.push(t)
    while (this.queue[0] < t - 3000) {
      this.queue.shift()
    }

    return this.queue.length
  }
}
const queue = new RecentCounter()
console.log(queue.ping(1))
console.log(queue.ping(100))
console.log(queue.ping(3001))
console.log(queue.ping(3002))