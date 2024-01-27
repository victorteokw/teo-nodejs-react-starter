import React, { FC } from 'react'
import { Router, Route, NotFound } from 'react-clean-router'
import Header from './components/Header'
import usePath from 'react-use-path'
import ExamplesPage from './components/ExamplesPage'
import ExamplePage from './components/ExamplePage'
import ExampleFormPage from './components/ExampleFormPage'
import AppRoot from './components/AppRoot'

const App: FC = () => {
    const [{ pathname }] = usePath()
    return <AppRoot>
        <Header />
        <Router path={pathname}>
            <Route match=''>
                <ExamplesPage />
            </Route>
            <Route match='/'>
                <ExamplesPage />
            </Route>
            <Route match='/examples'>
                <ExamplesPage />
            </Route>
            <Route match="/examples/new">
                <ExampleFormPage mode="create" />
            </Route>
            <Route match="/examples/<id>">
                <ExamplePage />
            </Route>
            <Route match="/examples/<id>/update">
                <ExampleFormPage mode="update" />
            </Route>
            <NotFound>
                <div>这个页面找不到。</div>
            </NotFound>
        </Router>
    </AppRoot>
}

export default App