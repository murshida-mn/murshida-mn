import React, { Component, FC } from 'react'
import { Field, reduxForm } from 'redux-form'
import { createProps } from '../../_TYPES/type'
import { connect, Connect } from 'react-redux';
import { StreamCreateAction  } from './action'

const ReduxFormInput: React.FC = (field: any) => (
    <div className= {`flex flex-col error my-10` }>
        <label className='w-full'>{field.label}</label>
        <input
            className='w-10/12 mx-auto text-center py-2'
            {...field.input}
            type={field.type}
            placeholder={field.placeHolder}
            max={field.maxDate}
            min={field.minDate}
            step={field.step}
            disabled={field.disabled}
        />
        {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
    </div>

);

class StreamForm extends Component<{handleSubmit:any,  OnSubmitForm:any}, {}> {

    constructor(props:any) {
        super(props)

    }
    
    renderInput({ input }: any) {
        return <input {...input} type="text" />;
    }

    render() {

        const onSubmit = (formVal:any) =>
        {            
            this.props.OnSubmitForm(formVal)
        }

         const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <Field
                    name="title"
                    type="text"
                    component={ReduxFormInput}
                    label="Title *"
                    placeHolder="Enter Title"
                /> 
                
                <Field
                    name="description"
                    type="text"
                    component={ReduxFormInput}
                    label="Description *"
                    placeHolder="Enter Description"
                /> 
                <button  className='bg-blue-500 py-2 px-12 mr-2 border-2 rounded-full'>Submit</button>
           </form>
        )
    }
}

const validate  = (formValues:any) => {
    const errors:any = {};

    if(!formValues.title)
    {
        errors.title = 'You must enter a Title'
    }

    if(!formValues.description)
    {
        errors.description = 'You must enter a description'
    }

    return errors
}

export default reduxForm <any, any>({ form: 'StreamForm' , validate})(StreamForm);

