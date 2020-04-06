/**所有路由配置的數組模塊 */
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";

export default [
  {
    path:'',
    component:Home
  },
  {
    name:'search',   
    path:'/search/:keywords?',  //params参数  ? 代表params参数可传可不传
    component:Search,
    props:(route)=>({keywords1:route.params.keywords,keywords2:route.query.keywords})
  },
  {
    path:'/register',
    component:Register,
    meta:{
      isHideFooter:true
    }
  },
  {
    path:'/login',
    component:Login,
    meta:{
      isHideFooter:true
    }
  },
]