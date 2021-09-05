/******************
 * table - mock
 *****************/

const tableList = []


export default [
  /**
   * table - 列表
   **/
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      console.log(config)
      // const { type } = config.query
      return {
        code: 200,
        data: tableList,
        message: 'success'
      }
    }
  }
]