import * as React from 'react'
import Form from 'components/form'

class Test extends React.Component {
    render() {
        return (
            <>
                <Form>
                    <input key="1" name="password" onChange= { () => {} }/>
                    <input key="2"/>
                    <input key="3"/>
                </Form>
            </>
        )
    }
}
export default Test
