import Pics from '../pics';
import Songs from '../songs';
import ReduxPost from '../posts/Index';
import Transalator from '../translator';
import GeoLocation from '../geolocation';
import Counter from '../tutorial/Counter';
import Network from '../tutorial/Network';
import Streams from '../stream/client/Index';

export const pathList = [
    {
        to: '',
        path: '',
        Component: Streams
    },
    {
        to: 'posts',
        path: 'posts',
        Component: ReduxPost
    },
    { 
        to: 'pics',
        path: 'pics',
        Component: Pics
    },
    {
        to: 'songs',
        path: 'songs',
        Component: Songs
    },
    { 
        to: 'transalator',
        path: 'transalator',
        Component: Transalator
    },
    { 
        to: 'location',
        path: 'location',
        Component: GeoLocation
    },
    {
        to: 'counter',
        path: 'counter',
        Component: Counter
    },
    { 
        to: 'network',
        path: 'network',
        Component: Network
    }
]