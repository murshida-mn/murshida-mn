import React, { Component } from 'react'
import ApiService, { fetchWIthTimeout, makeGetRequest } from '../../helper/Service';
import Comments from './Comments';

interface Iprops {

}

interface Istate {
    loading?: boolean,
    data?: any,
    error?: any,
    comments?:any
}


export class Network extends Component<Iprops, Istate> {

    constructor(props: Iprops) {
        super(props)

        this.state = {
            loading: true,
            data: [],
            comments: []
        }

    }


    componentDidMount() {
        console.log('Component Did Mount');
        console.log('--------------');
        this.setState({ loading: false })

        this.fetchComments();

    }

    
    fetchComments = async() => {
        
        try {
            const comments = await ApiService.makeGETRequest('comments', {postId:'1'});
            
            this.setState({
                comments: comments,
                loading: false
            })

        } catch(error) {
         
            console.log(error);
            
            this.setState({
                error: error,
                loading: false
            })

        }

    }

    abortFetchCall() {
        // controller.abort();
    }

    render() {

        const { error, loading, data } = this.state;

        let controller: any = null;


        const parallerRequest = async () => {
            controller = new AbortController();


            try {
                console.log('request started');

                const [photos, todos] = await Promise.all([fetchWIthTimeout('photos'), makeGetRequest('todos',{},{ signal: controller.signal })]);

                this.setState({
                    data: photos,
                    loading: false
                })
                console.log(photos);
                console.log(todos);


            } catch (error) {
                this.setState({
                    error: error,
                    loading: false
                })

                console.log(error);

            }
        }


        function abortRequest() {
            console.log('aborting...')
            console.log(controller);

            if (controller) controller.abort();
        }




        if (error) {
            return <div>Error Loading... {error.message}</div>
        }
        else if (loading) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    {/* <button onClick={fetchPhotos} > fetch request</button> */}
                    <button onClick={abortRequest}> abort fetch request</button>
                    <button onClick={parallerRequest}> parallel fetch request</button>

                    {/* <input defaultValue={data.title} /> */}

                    <div style={{ 'display': 'flex', flexWrap: 'wrap' }} >

                        {this.state.comments.length > 0 && this.state.comments.map((item:any) => (
                            <Comments  name={item.name} body={item.body} id={item.id} email={item.email} />
                        )) }

                        {this.state.data.length > 0 && this.state.data.map((item: any) => (
                            <img key={item.id} src={item.url} width="100" height="100" />
                        ))}

                    </div>

                </div>
            )
        }




    }
}

export default Network
