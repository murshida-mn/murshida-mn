import { Routes, Route , Router} from 'react-router-dom'
import { nav } from './nav'
import { StreamHeader } from './StreamHeader'
import '../style.css'
import { Provider } from 'react-redux'
import ConfigStore from '../../../store/post/store'
import { useLayoutEffect, useReducer } from "react";
import { Update } from "history";
import history from '../../../History'

const reducer = (_: Update, action: Update) => action;

const store = ConfigStore();

const Index = () => {

    const [state, dispatch] = useReducer(reducer, {
        action: history.action,
        location: history.location,
    });
    
    useLayoutEffect(() => history.listen(dispatch), []);
    return (
        <Provider store={store}>
            <div className='App'>
            <Router navigationType={state.action} location={state.location} navigator={history}>               
            
            <StreamHeader />
                    <div className='main-content'>
                        <Routes>
                            {nav.map(({ path, Component }) => (
                                <Route key={path} path={path} element={<Component />} />
                            ))}
                        </Routes>
                    </div>

                </Router>
            </div>

        </Provider>
    )
}

export default Index
