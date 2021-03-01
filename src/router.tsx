/**
 * @description 使用react-router-config实现路由集中化管理
 * 问题: 1. react-router-dom 原生嵌套路由父路由无法渲染
 * 问题: 2. react-router-dom 原生实现默认路由
 */

import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import PageLoading from '@/components/pageLoading'
import Main from '@/views'

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

/**
 * @param exact 精确匹配
 */
export default [
    {
        path: '/',
        component: Main,
        routes: [
            {
                path: '/',
                exact: true,
                render: () => <Redirect to='/home'/>
            },
            {
                path: '/home',
                component: Home,
                routes: [
                    {
                        path: '/home',
                        exact: true,
                        render: () => <Redirect to='/home/part1'/>
                    },
                    {
                        path: '/home/part1',
                        exact: true,
                        component: Part1
                    },
                    {
                        path: '/home/part2',
                        exact: true,
                        component: Part2
                    }
                ]
            },
            {
                path: '/login',
                exact: true,
                component: Login
            }
        ]
    }
]
