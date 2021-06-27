/******************
 * 图表 - mock
 *****************/

const barData = [
  {
    label: ['香蕉', '苹果', '芒果', '哈密瓜', '凤梨', '柚子'],
    value: [222, 333, 125, 88, 356, 452]
  }
]

export default [
  /**
   * 图表 - 柱状图
   **/
  {
    url: '/charts/barData',
    type: 'get',
    response: config => {
      console.log(config)
      // const { type } = config.query
      return {
        code: 200,
        data: barData[0],
        message: 'success'
      }
    }
  }
]