// 1. 有效的括号
// https://leetcode-cn.com/problems/valid-parentheses/
function isValide(str) {
  const stack = []
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (const x of str) {
    if (x in map) {
      stack.push(x)
      continue
    }
    if (map[stack.pop()] !== x) return false
  }
  return !stack.length
}

console.log(isValide('()[]{}'))