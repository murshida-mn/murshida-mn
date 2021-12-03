import React, { Component, createRef, RefObject } from 'react'

type Iprops = {
    url: any
}

type Istate = {
    spans:number
}

export class ImageCard extends Component<Iprops, Istate> {
    private imageRef: RefObject<HTMLImageElement>;

    constructor(props: Iprops) {
        super(props)

        this.state ={
            spans: 0
        }

        this.imageRef = createRef();
    }

    componentDidMount() {
        this.imageRef.current?.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current?.clientHeight || 0;

        const spans = Math.ceil( height / 10)

        this.setState({spans})
        console.log(this.imageRef.current?.clientHeight);
    }

    render() {
        const { url } = this.props;

        return (
            <div  style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img  ref={this.imageRef} src={url.thumb} />

            </div>
        )
    }
}

export default ImageCard
