/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxf4dc809b41cfcbd5',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8a3bd36055ac694b519ec44142cc2dd4',

  PROVINCE: '山东',
  CITY: '潍坊',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小浣熊',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6YIw5uuDoQ1LEoutX8442OOjMBM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'JYpnLZqVZO2PYdsAnn-_af9R_UJuHNFqRLhIRiD6fuE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小浣熊', year: '2000', date: '12-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小浣熊', year: '2000', date: '02-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-31' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'sqCvUHJ924nXKdaDxFKb46iNNNa_NW8mxnD6eWVaMVs',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6YIw5uuDoQ1LEoutX8442OOjMBM',
    }
  ],

}

module.exports = USER_CONFIG

