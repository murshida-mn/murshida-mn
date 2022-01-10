import React, { Component, FC, Fragment } from 'react'
import { connect } from 'react-redux';
import { StreamCreateAction } from './action'
import StreamForm from './StreamForm';


class StreamCreate extends Component<{ StreamCreateAction: any }, {}> {

    constructor(props: any) {
        super(props)
    }

    handleSubmit = (formValues: any) => {
        this.props.StreamCreateAction(formValues)
    }

    render() {
        return (
            <Fragment>
                <div className="text-center bg-indigo-50 w-1/2 mx-auto py-5">
                    <h3 className="text-lg font-bold uppercase">Create Stream</h3>
                    <StreamForm OnSubmitForm={this.handleSubmit} />
                </div>
            </Fragment>
        )
    }
}


export default connect(null, { StreamCreateAction })(StreamCreate)
