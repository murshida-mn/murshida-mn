import React, { Component, FormEventHandler } from 'react'

export class Post extends Component {

    render() {

        function handleSubmit(e:any) {
            e.preventDefault();
        }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>User Id </label>
                        <input type="number" name="userId" />
                    </div>
                    <div>
                        <label>Title  </label>
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <label>Body</label>
                        <input type="textarea" name="body" />
                    </div>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Post
