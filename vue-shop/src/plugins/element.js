/*
 * @Author: dongwenjie
 * @Description elementui按需引入
 * @Date: 2019-11-12 10:23:26
 * @Last Modified by: dongwenjie
 * @Last Modified time: 2019-11-12 15:01:45
 */
import Vue from 'vue'
import { Button, Form, FormItem, Input, Tooltip, Message } from 'element-ui'
Vue.prototype.$message = Message
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Tooltip)
