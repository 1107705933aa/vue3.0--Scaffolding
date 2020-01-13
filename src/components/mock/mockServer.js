// 使用mockjs提供mock数据
import Mock from "mockjs"
import dataJson from "./data"

// 返回接口
Mock.mock("/data", { code: 0, datas: dataJson.data })

// 拦截ajax
// Mock.setup({
//     timeout:2000
// })