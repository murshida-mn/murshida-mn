import  { Component } from 'react'
import { FaUser } from 'react-icons/fa';
import { connect } from 'react-redux'
import { PostProps } from '../../_TYPES/type';
import { fetchPostAndUsers } from './action'
import AuthorHeader from './AuthorHeader';

class PostList extends Component<PostProps, {}> {
    
    componentDidMount() {                
        this.props.fetchPostAndUsers()
    }



    
    renderPostList() {

       return this.props.posts?.map(post => {
            return (
                <div className="item card" key={post.id}>
                    <FaUser className='user-icon' />
                    <div className='content'>

                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <AuthorHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }
    
    render() {

        return (
            <div className='d-flex'>
                {this.renderPostList()}
            </div>
        )
    }
}

const mapStateFromProps = (state:any) => {
    return { 
        posts: state.posts
    }
 
}

export default connect(mapStateFromProps, { fetchPostAndUsers })(PostList)
