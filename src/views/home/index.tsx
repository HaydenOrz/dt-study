import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import { Card } from 'antd'
import Part1 from './part1'
import Part2 from './part2'
// const Option = AutoComplete.Option
class Test extends React.Component {
    state={
        value: ''
    }

    render() {
        // const dataSource = ['Jack', 'Tom', 'apple', 'banana']
        return (
            <>
                <ul>
                    <li><Link to='/home/part1'>part1</Link></li>
                    <li><Link to='/home/part2'>part2</Link></li>
                </ul>
                <Route path='/home/part1' component={Part1}/>
                <Route path='/home/part2' component={Part2}/>
                <Card
                    key='previewCard'
                    tabBarExtraContent={<a href="#">More</a>}
                    tabList={[{ key: 'first', tab: 'tab1' }, { key: 'second', tab: 'tab2' }]}
                    activeTabKey={'first'}
                >
                    { [111, 222][0] }
                    {/* { restfulPreviewData[previewTabKey] } */}
                </Card>
            </>
        )
    }
}
export default Test
