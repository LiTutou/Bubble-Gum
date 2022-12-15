# vue & jsvascript 部分封装函数

[[toc]]

## 数据合并

```javascript
// 数据合并
export function mergeRecursive(source, target) {
  for (var p in target) {
    try {
      if (target[p].constructor == Object) {
        source[p] = mergeRecursive(source[p], target[p]);
      } else {
        source[p] = target[p];
      }
    } catch (e) {
      source[p] = target[p];
    }
  }
  return source;
}
```

## 删除为空数据

```javascript
//删除为空的数据
function removePropertyOfNull(obj) {
  var i = obj.length;
  while (i--) {
    if (obj[i] === null) {
      obj.splice(i, 1);
    }
  }
  return obj;
}
```

## 验证是否为 blob 格式

```javascript
// 验证是否为blob格式
export async function blobValidate(data) {
  try {
    const text = await data.text();
    JSON.parse(text);
    return false;
  } catch (error) {
    return true;
  }
}
```

## 构造树型结构数据

```javascript
/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree(data, id, parentId, children) {
  let config = {
    id: id || "id",
    parentId: parentId || "parentId",
    childrenList: children || "children",
  };

  var childrenListMap = {};
  var nodeIds = {};
  var tree = [];

  for (let d of data) {
    let parentId = d[config.parentId];
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = [];
    }
    nodeIds[d[config.id]] = d;
    childrenListMap[parentId].push(d);
  }

  for (let d of data) {
    let parentId = d[config.parentId];
    if (nodeIds[parentId] == null) {
      tree.push(d);
    }
  }

  for (let t of tree) {
    adaptToChildrenList(t);
  }

  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]];
    }
    if (o[config.childrenList]) {
      for (let c of o[config.childrenList]) {
        adaptToChildrenList(c);
      }
    }
  }
  return tree;
}
```

## 转换字符串，undefined,null 等转化为""

```javascript
// 验证是否为blob格式
export function parseStrEmpty(str) {
  if (!str || str == "undefined" || str == "null") {
    return "";
  }
  return str;
}
```

## 首字母大小

```javascript
export function titleCase(str) {
  return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
```

## 下划转驼峰

```javascript
export function camelCase(str) {
  return str.replace(/_[a-z]/g, (str1) => str1.substr(-1).toUpperCase());
}
```

## 判断是否为 Number

```javascript
export function isNumberStr(str) {
  return /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(str);
}
```

## 防抖

```javascript
/**
 * @param {Function} fn 防抖函数
 * @param {Number} delay 延迟时间
 */
export function debounce(fn, delay) {
  var timer;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
```

## 计算精度丢失问题

```javascript
/**
 * 计算操作
 * @param {除法函数}
 * @param {*} arg2
 * 说明：javascript的加减乘除计算结果会有误差
 * 在两个浮点数相除的时候会比较明显
 * 返回值：arg1除以arg2的精确结果
 */

// 除法
export function division(arg1, arg2) {
  if (arg1 == undefined) return (arg1 = 0);
  if (arg2 == undefined) return (arg2 = 0);
  var t1 = 0,
    t2 = 0,
    r1,
    r2;
  try {
    t1 = arg1.toString().split(".")[1].length;
  } catch (e) {} //--小数点后的长度
  try {
    t2 = arg2.toString().split(".")[1].length;
  } catch (e) {} //--小数点后的长度
  //with(Math){
  r1 = Number(arg1.toString().replace(".", "")); //--去除小数点变整数
  r2 = Number(arg2.toString().replace(".", "")); //--去除小数点变整数
  return (r1 / r2) * Math.pow(10, t2 - t1); //---整数相除 在乘上10的平方  小数点的长度
}

// 乘法
export function mul(arg1, arg2) {
  if (arg1 == undefined) return (arg1 = 0);
  if (arg2 == undefined) return (arg2 = 0);
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
}

// 加法
export function add(arg1, arg2) {
  if (arg1 == undefined) return (arg1 = 0);
  if (arg2 == undefined) return (arg2 = 0);
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}

// 减法
export function sub(arg1, arg2) {
  if (arg1 == undefined) return (arg1 = 0);
  if (arg2 == undefined) return (arg2 = 0);
  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  //last modify by deeka
  //动态控制精度长度
  n = r1 >= r2 ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
```

完善中...