import React, {memo} from "react";
import { NavLink } from "react-router-dom";

export default memo(function AZAppHeader() {
    return (
        <div>
            {/* <h2>AZAppHeader</h2> */}
            <NavLink to="discover">发现音乐 </NavLink>
            <NavLink to="mine">我的音乐 </NavLink>
            <NavLink to="friend">我的好友 </NavLink>
        </div>
    )
})