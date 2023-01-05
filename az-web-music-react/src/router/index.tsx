import {redirect} from "react-router-dom"

const routes = [
    {
        path: "/discover",
        exact: true,
        render: ()=> (
            <redirect url="discover"/>
        )
    },
    {
        path: "/mine",
        exact: true,
        render: ()=> (
            <redirect to="mine"/>
        )
    },
    {
        path: "/friend",
        exact: true,
        render: ()=> (
            <redirect to="mine"/>
        )
    },
]

export default routes;