/*
 * @Author: dongwenjie
 * @Description 整合api并按需导出（各个文件所需api按需引入）
 * @Date: 2019-11-12 10:23:26
 * @Last Modified by: dongwenjie
 * @Last Modified time: 2019-11-13 17:04:36
 */

import { generate } from '../utils/apiGenerator'
import login from './login'
const api = {
  login
}
let apiObjModel = generate(api)

export const loginApi = apiObjModel.login // 导出登陆有关的api
