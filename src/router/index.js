/**路由器對象模塊 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routers";

const originPush =  VueRouter.prototype.push
// VueRouter.prototype.push = function (location,onComeplete=()=>{},onAbort) {
//   return originPush.call(this,location,onComeplete,onAbort)
// }

VueRouter.prototype.push = function (location,onComeplete,onAbort=()=>{}) {
  return originPush.call(this,location,onComeplete,onAbort)
}

// VueRouter.prototype.push = function (location,onComeplete,onAbort) {
//   return originPush.call(this,location,onComeplete,onAbort).catch(()=>{})
// }
Vue.use(VueRouter)

export default new VueRouter({
  mode:'hash',
  routes
})