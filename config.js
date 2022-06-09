// 请完善以下信息
// 重要提醒：请在上报前确保信息与真实情况相符，否则可能构成违法行为！！

const config = {
  username: "190110169", // 哈工大（深圳）统一身份认证系统的用户名
  checkedList: [
    { item: "国内" },
    { item: "低风险" },
    { item: "否" },
    { title: "48", item: "是" },
    { item: "正常" },
    { item: "接种全部" },
    { item: "以下" },
    { item: "无不适" },
  ], // 需要选择的选项中的关键词
  enableAutoGeolocation: false, // 是否通过默认方式设置 “所在地点”

  // 以下选项为高级功能，请谨慎使用
  enableSetCurrentStatus: false, // 是否设置 “当前状况”，关闭后 “当前状况” 与上次上报一致
  enableSetGeolocation: true, // 是否人工设置 “所在地点”，该选项会被 enableAutoGeolocation 覆盖效果
  statusCode: "99", // “当前状况” 对应的代码，参见 main.js 中的 statusMap
  geolocation: {
    // 需要上报的地理位置信息
    // 请通过此网页获取经纬度：https://lbs.amap.com/tools/picker
    // 请通过此网页获取准确的地理位置表述：https://lbs.amap.com/demo/Javascript-api/example/district-search/city-drop-down-list
    latitude: "11.451400",
    longitude: "191.981000",
    province: "你的省", // 省市区（省级行政区）
    city: "你的市", // 地级市（地级行政区）
    district: "你的区", // 区县（县级行政区）
    street: "你的路69号", // 最后一级，精确到门牌号
  },
  isHeadless: true, // 是否开启 Headless 模式
};

module.exports = config;
