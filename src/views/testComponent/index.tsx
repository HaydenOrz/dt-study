import * as React from 'react'
import Form from 'components/form'
import { Card } from 'antd'
// const Option = AutoComplete.Option
class Test extends React.Component {
    state={
        value: ''
    }

    render() {
        // const dataSource = ['Jack', 'Tom', 'apple', 'banana']
        return (
            <>
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
