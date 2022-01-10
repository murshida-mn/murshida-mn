import _ from "lodash";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { fetchStreamAction , editStreamAction} from "./action";
import StreamForm from "./StreamForm";

const StreamEdit = (props:any) => {
    
    const match = useMatch(`/streams/edit/:id`);

    useEffect(() => {
      props.fetchStreamAction(match?.params.id)
    }, [])

 

    const handleSubmit = (formVal:any) => {
        props.editStreamAction(match?.params.id, formVal)
    }
    
    const renderLoading = () => {
        if(!props.stream) {
            return <div>Loading...</div>
        }
    }

    const stream = Object.values(props.stream).find((item:any) => item.id == match?.params.id )

    
    return (
        
        <div className="text-center bg-indigo-50 w-1/2 mx-auto py-5">
            <h3 className="text-lg font-bold uppercase">Edit Stream</h3>
            {renderLoading()}
            <StreamForm OnSubmitForm={(val:any)=>handleSubmit(val)} initialValues={_.pick(stream, 'title', 'description')} />
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return { stream: state.streams}
}

export default connect(mapStateToProps, { fetchStreamAction, editStreamAction,  })(StreamEdit)
