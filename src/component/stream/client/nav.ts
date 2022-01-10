import StreamCreate from "../StreamCreate";
import StreamDelete from "../StreamDelete";
import StreamEdit from "../StreamEdit";
import StreamList from "../StreamList";
import StreamShow from "../StreamShow";

export const nav = [
    {
        path: '',
        Route: [
            {
                to: '',
                title: 'StreamY'
            }
        ],
        Component: StreamList
    },
    {
        path: 'streams',
        Route: [
            {
                to: 'streams',
                title: 'All Streams'
            }
        ],
        Component: StreamList
    }, {
        path: 'streams/new',
        Route: [
            
        ],
        Component: StreamCreate
    }, {
        path: 'streams/edit/:id',
        Route: [
        ],
        Component: StreamEdit
    }, {
        path: 'streams/:id',
        Route: [

        ],
        Component: StreamShow
    }, {
        path: 'streams/delete/:id',
        Route: [

        ], Component: StreamDelete
    },

]