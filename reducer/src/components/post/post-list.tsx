import React, {useState, useEffect} from 'react';

interface PostType {
    id: number;
    userid: number;
    title: string;
    body: string;
}

export function Post() {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [err, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/pocsacascascasc')
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            throw response;
        })
        .then((res) => {
            setPosts(res);
        })
        .catch((err) => {
            setError(new Error(err.status));
        })
    }, []);

    return (
        <div>
            <h2>List post:</h2>
            {
                err && <p>Error: {err.message} </p>
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