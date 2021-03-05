import * as React from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import '@/style/index.scss'
import routes from './router'

class Root extends React.Component<any, any> {
    render () {
        const { store } = this.props
        return (
            <Provider store={store}>
                <AppContainer>
                    <HashRouter>
                        {renderRoutes(routes)}
                    </HashRouter>
                </AppContainer>
            </Provider>
        )
    }
}

export default Root
