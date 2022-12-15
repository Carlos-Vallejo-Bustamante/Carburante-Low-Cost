import React, { useEffect, useState } from 'react'
import parse from "html-react-parser";


const Prueba = () => {

    const [posts, setPost] = useState([])

    useEffect(() => {
        call()
    }, [])

    const call = async () => fetch('https://idealrenting10.com/wp-json/wp/v2/posts/13207')
        .then(response => response.json())
        .then(posts => {
            setPost(posts)
            console.log(posts)
        })

    return (
        <>
            <div>Prueba</div>

            <h1>{posts && posts.title.rendered}</h1>
            {posts && parse(posts.content.rendered)}
        </>
    )
}

export default Prueba