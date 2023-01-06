import { RouteConfig } from "react-router-config";
// import {redirect} from "react-router-dom"

import AZDiscover from '../pages/discover'
import AZFriend from '../pages/friend'
// import AZMine from '@/pages/mine'
import AZMine from '../pages/mine'

// 参考文章 https://blog.csdn.net/YanG_2859390447/article/details/121765747


const routes: RouteConfig[] = [
    {
        path: "/",
        exact: true,
        component:AZDiscover 
    },
    {
        path: "/discover",
        exact: true,
        component:AZDiscover 
    },
    {
        path: "/mine",
        exact: true,
        component:AZMine,
    },
    {
        path: "/friend",
        exact: true,
        component:AZFriend
        // 普通routes的写法，现在使用RouteConfig直接使用component即可
        // render: ()=> (
        //     redirect("friend")
        // )
    },
]

export default routes