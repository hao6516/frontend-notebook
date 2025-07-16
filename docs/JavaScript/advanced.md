# JavaScript代码案例

## 1. 数组去重
方法1：使用Set
```js
const uniqueArr1 = (arr) => [...new Set(arr)]
```
方法2：双重for循环
```js
const uniqueArr2 = (arr) => {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                break
            }
        }
        res.push(arr[i])
    }
    return res
}
```
方法3：filter + indexOf
```js
const uniqueArr3 = (arr) => 
    arr.filter((item, index) => arr.indexOf(item) === index)
```

方法4：reduce + includes
```js
const uniqueArr4 = (arr) => arr.reduce((acc, item) => acc.includes(item) ? acc: [...acc, item], [])
```

方法5：Map
```js
const uniqueArr5 = (arr) => {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], i)
        }
    }
    return [...map.keys()]
}
```
方法6：Object
```js
const uniqueArr6 = (arr) => {
    const obj = {}
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            res.push(arr[i])
        }
    }
    return res
}
```
<script setup>
const uniqueArr1 = (arr) => [...new Set(arr)]
</script>