import React, {useState, useEffect, useReducer} from 'react';
import { Post } from './post-list';

interface PostType {
    id: number;
    userid: number;
    title: string;
    body: string;
}

interface PostListState {
    posts: PostType[],
    error: Error | null
}

const initializeState: PostListState = {
    error: null,
    posts: []
}

function reducer(state: PostListState, action: any) {    
    switch (action.type) {
        case 'GET_POST_SUCCESS':
            return {
                ...state,
                posts: action.payload as PostType[],
                error: null
            }
        case 'GET_POST_FAIL':
            return {
                ...state,
                posts: [],
                error: action.payload as Error
            }
        default:
            return state;
    }
}

export function PostListReducer() {
    const [state, dispath] = useReducer(reducer, initializeState);
    const {error, posts} = state;
    const [param, setParam] = useState<string>('new');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts' + param)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            throw response;
        })
        .then((res) => {
            dispath({
                type: 'GET_POST_SUCCESS', 
                payload: res
            });
        })
        .catch((err) => {
            dispath({
                type: 'GET_POST_FAIL', 
                payload: new Error(err.status)
            });
        })
    }, [param]);

    function reSubmit() {
        setParam('');
    }

    return (
        <div>
            <button onClick={reSubmit}>Re Submit</button>
            <h2>List post:</h2>
            {
                error && <p>Error: {error.message} </p>
            }
            {
                posts?.map((post) => {
                    return (
                    <div key={post.id}> 
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}