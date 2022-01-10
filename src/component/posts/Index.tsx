import { Provider } from "react-redux"
import ConfigStore from '../../store/post/store'
import PostList from "./PostList";
import './style.css'

const store = ConfigStore();

export default function Index() {
    return (
        <Provider store={store}>
            <div>
                <PostList />
            </div>
        </Provider >
    )
}