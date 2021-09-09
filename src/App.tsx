import React from 'react';
import './styles.sass';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditorPage from './pages/editor/EditorPage';
import HomePage from './pages/home/HomePage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/editor'>
                    <EditorPage></EditorPage>
                </Route>
                <Route path='/'>
                    <HomePage></HomePage>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
