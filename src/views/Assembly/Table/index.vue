<template>
  <div></div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { getList } from '@/api/assembly/table'
export default {
  name: 'Table',
  setup () {
    const list = ref([])
    const flag = 'vesselNameEn'

    let tempList = []

    const getAllData = () => {
      getList().then(data => {
        console.log(data)
        list.value = data
        // 根据船把一维数组转化为二维数组（为了使数据根据船进行排序）
        tempList = convertData(data)
        console.log('tempList', tempList)
        // 把二维数组转化为一维数组（table中使用）
        let list1 = tempList.reduce(function (a, b) { return a.concat(b) })
        console.log('list', list1)
        console.log(getRowSpanCount(tempList, 'bondedAreaFlag', 1))
        console.log(tempList)
      }).catch(err => {
        console.log(err)
      })
    }

    // 判断是否为对象
    const isObject = (obj) => {
      return Object.prototype.toString.call(obj) === "[object Object]"
    }

    /**
     * @param {*} data   [数组的某一项]
     * @param {*} target [要获取值的属性名]
     * @returns 属性值
     * method of 获取嵌套对象属性的值
     */
    const getValue = (data, target) => {
      for (const key of Object.keys(data)) {
        if (key === target) {
          return data[key]
        }
        if (isObject(data[key])) {
          const result = getValue(data[key], target)
          if (result) {
            return result
          }
        }
      }
    }

    // 根据船把一维数组转化为二维数组
    const convertData = () => {
      const data = [...list.value]

      data.forEach((item, index) => {
        data[index] = { ...item, ...item.tailInfos }
      })

      let index = 1
      const tempData = Object.values(data.reduce((res, item) => {
        if (res[item[flag]]) {
          res[item[flag]].push(item)
        } else {
          item.no = index
          index++
          res[item[flag]] = [item]
        }
        return res
      }, {}))

      return tempData
    }

    /**
     * @param {*} data   [后台数据]
     * @param {*} key    [要合并的字段]
     * @param {*} target [后台数据对应的index]
     * @returns 合并的行数
     * method of 获取合并的行数
     */
    const getRowSpanCount = (data, key, target) => {
      if (!Array.isArray(data)) return 1
      const res = []
      tempList.forEach((item, index) => {
        data = item.map(v => v.key) // 只取出筛选项
        let preValue = data[0]
        res[index] = [preValue] // 放进二维数组里
        let k = index // 二维数组下标
        for (let i = 1; i < data.length; i++) {
          if (data[i] === preValue) {
            // 相同放进二维数组
            res[k].push(data[i])
          } else {
            // 不相同二维数组下标后移
            index += 1
            res[k] = []
            res[k].push(data[i])
            preValue = data[i]
          }
        }
      })

      const arr = []
      res.forEach(item => {
        const len = item.length
        for (let i = 0; i < len; i++) {
          arr.push(i === 0 ? len : 0)
        }
      })
      return arr[target]
    }

    onMounted(() => {
      setTimeout(() => {
        getAllData()
      }, 200)
    })

    return {
      list,
      tempList,
      getValue
    }
  }

}
</script>

<style lang="scss" scoped>
</style>