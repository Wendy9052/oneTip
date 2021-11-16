<template>
  <!--  -->
  <div class="tips_page">
    <div class="tips_title">JS优雅的使用技巧～</div>
    <div class="btn_box">
      <el-button plain @click="addProperty()">1.使用展开运算符 ... 来有条件的向JS对象添加属性</el-button>
      <el-button plain @click="propertyExist()">2.检查属性是否存在对象中,可以使用 in 关键字来检查 JavaScript 对象中是否存在某个属性</el-button>
      <el-button plain @click="dynamicProperty()">3.对象中的动态属性名称,使用动态键设置对象属性很简单。只需使用['key name']来添加属性</el-button>
      <el-button plain @click="dynamicKey()">4.使用动态键进行对象解构</el-button>
      <el-button plain @click="nullMergeOperator()">5.空值合并 ?? 操作符</el-button>
      <el-button plain @click="optionalChain()">6.可选链 ?. </el-button>
      <el-button plain @click="doubleDenial()">7.使用 !! 操作符（双重否定表肯定）</el-button>
      <el-button plain @click="strAndIntegerConverdsion()">8.字符串和整数转换</el-button>
      <el-button plain @click="checkFackValue()">9.检查数组中的假值</el-button>
      <el-button plain @click="flattenArrays()">10.数组扁平化</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mouted() {

  },
  methods: {
    // 添加属性
    addProperty() {
      let add = true
      let dont_add = false
      let person1 = {
          id:1,
          name: 'pop jod',
          ...( add && { age: 16 } ),
          ...( dont_add && { height: "187" })
      }
      console.log(person1) 
    },
    // 检查属性是否存在对象中
    propertyExist() {
      let person = {
        name: '阿斯顿',
        age:12
      }
      console.log('age' in person)  // true
      console.log('another' in person)    // false
    },
    // 设置对象中的动态属性
    dynamicProperty() {
      let namekey = 'name'
      let item = {
          age: 12,
          [namekey]: 'key name'
      }
      console.log(item) // {age: 12, name: 'key name'}
      // 也可以动态健引用对象属性
      let keyage = 'age'
      console.log(item[keyage]) // 12
    },
    // 使用动态键进行对象解构
    dynamicKey() {
      // 静态解构
      let person = {
          name:'pop',
          age: 12
      }
      let { name: personName } = person
      console.log(personName) // pop

      // 动态解构
      let template = {
          'come': 'come here',
          'go': 'go another'
      }
      let comeName = 'come'
      let { [comeName]: templateCome } = template
      console.log(templateCome) // come here
    },
    // 空值合并操作符
    nullMergeOperator() {
      // 当我们想检查一个变量是否为 null 或 undefined 时，??操作符很有用
      let bobo = null ?? 'Hello'
      console.log(bobo) // Hello

      let item = 'has item' ?? 'Hello'
      console.log(item)   // has item

      // 和 || 的区别是 0， ?? 只判断是否是null和undefined
      let canBeZero = 0 ?? 5;
      let canBeZero1 = 0 || 5;
      console.log(canBeZero); // 0
      console.log(canBeZero1); // 5
    },
    // 可选链?.
    optionalChain() {
      // 我们是不是经常遇到这样的错误： TypeError: Cannot read property ‘foo’ of null。这对每一个毅开发人员来说都是一个烦人的问题。引入可选链就是为了解决这个问题。一起来看看
      let book = {
          id: 1,
          title: 'title',
          author: null
      }
      // console.log(book.author.age) // throw error 通常解决办法
      console.log(book.author && book.author.age) // null

      // 使用可选链
      console.log(book.author?.age) // undefined
      // 深度可选链
      console.log(book.author?.address?.city); // undefined

      // 也可以使用函数可选链
      let newBook = {
          id: 1,
          title: 'title',
          author: null,
          open(){
              console.log('打开书本')
          }
      }
      // console.log(newBook.openBook()) // throw error
      console.log(newBook.openBook?.()) //undefined
    },
    // 使用 !! 操作符（双重否定表肯定）
    doubleDenial() {
      let _boolean = 'Hello world'
      console.log(!!_boolean) // true

      let __boolean = ''
      console.log(!!__boolean) // false
    },
    // 字符串和整数转换
    strAndIntegerConverdsion() {
      // 使用 + 操作符将字符串快速转换为数字:
      let stringNum = '123'

      console.log(+stringNum)  // 123
      console.log(typeof +stringNum)  // Number

      // 要将数字快速转换为字符串，也可以使用 + 操作符，后面跟着一个空字符串:
      let _string = 25 + ''
      console.log(_string) // '25'
      console.log(typeof _string) // String
    },
    // 检查数组中的假值
    checkFackValue() {
      // 大家应该都用过数组方法：filter、some、every，这些方法可以配合 Boolean 方法来测试真假值。
      let Arr = [null, false, 'Hello', undefined, 0]
      // 过滤假值
      let filtered = Arr.filter(Boolean)
      console.log(filtered) // ['Hello']

      // 检查至少一个值是否为真
      let _Arr = Arr.some(Boolean)
      console.log(_Arr) // true

      // 检查所有的值是否为真
      let __Arr = Arr.every(Boolean)
      console.log(__Arr) // false

      // 下面是工作原理
      Arr.filter(val => Boolean(val));
      Arr.filter(Boolean);
      
      let a = null
      console.log(Boolean(a)) // false
    },
    // 数组扁平化
    flattenArrays() {
      // 在原型 Array 上有一个方法 flat，可以从一个数组的数组中制作一个单一的数组
      let arr = [{ id: 1 }, [{ id: 2 }], [{ id: 3 }]]
      let newArr = arr.flat() 
      console.log(newArr) // [ { id: 1 }, { id: 2 }, { id: 3 } ]

      // 如果是深度级别的，指定一个嵌套的数组解构应该扁平化的深度
      let arr1 = [0, 1, 2, [[[3, 4]]]];
      console.log(arr1.flat(2)); // [0, 1, 2, [3,4]]
      console.log(arr1.flat(3)); // [0, 1, 2, 3, 4]
    }
  }
}
</script>

<style lang="scss" scoped>
.tips_page{
  .tips_title{
    color: #ccc;
    margin-bottom: 15px;
  }
  .btn_box {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .el-button {
    margin-bottom: 15px;
    color: #ccc;
  }
}
</style>