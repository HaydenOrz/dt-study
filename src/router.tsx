import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import PageLoading from '@/components/pageLoading'
import Main from '@/views'
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

export default (
    <Route path='/' component={Main}>
        <Route path='/home' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/*' component={Home}/>
    </Route>
)
