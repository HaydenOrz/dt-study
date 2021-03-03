import * as React from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Card } from 'antd'
// const Option = AutoComplete.Option
class Test extends React.Component<any, any> {
    state={
        value: ''
    }

    render () {
        // const dataSource = ['Jack', 'Tom', 'apple', 'banana']
        return (
            <>
                <ul>
                    <li><Link to='/home/part1'>part1</Link></li>
                    <li><Link to='/home/part2'>part2</Link></li>
                </ul>
                {renderRoutes(this.props.route.routes)}
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
