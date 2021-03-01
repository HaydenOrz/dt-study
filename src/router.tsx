import React, { lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PageLoading from '@/components/pageLoading'
import Main from '@/views'
import Header from '@/views/layout/header'

// import Home from '@/views/home'
// import Login from '@/views/login'
/**
 *  在路由组件外包裹一层Suspense
 */
const wrapperSuspense = (RouteComponent: any) => (props: any) => (
    <Suspense fallback={<PageLoading/>}>
        <RouteComponent {...props} />
    </Suspense>
)

const Home = wrapperSuspense(
    lazy(() => import('@/views/home'))
)
const Login = wrapperSuspense(
    lazy(() => import('@/views/login'))
)
const Part1 = wrapperSuspense(
    lazy(() => import('@/views/home/part1'))
)
const Part2 = wrapperSuspense(
    lazy(() => import('@/views/home/part2'))
)

// export default (
//     <Main>
//         <Redirect path='/' to='/home'/>
//         <Route path='/home' component={Home} />
//         <Route path='/login' component={Login}/>
//     </Main>
// )
// export default (
//     <Route path='/' component={Main}>
//         <Route path='/home' component={Home} />
//         <Route path='/login' component={Login}/>
//     </Route>
// )
const initRoutes = () => {
    return {
        path: '/',
        component: Main
        // childRoutes: [
        //     {
        //         path: 'home',
        //         component: Home
        //     },
        //     {
        //         path: 'login',
        //         component: Login
        //     }
        // ]
    }
}
export default initRoutes
