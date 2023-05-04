import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

//reactta her objenin bir state'i olur. componentın durum bilgisi gibi
//post componentının istekleri: post listesi donmeli, apicall
//yine apicall icin loaded.. vs

function Post() {

    //basta error olmayacak. ilk state'i null.
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    //api callu useEffect icinde yapacagiz. data donerse 
    //postListin icinde dondurecegiz.

    useEffect(() =>  {
        fetch("/posts")
        .then(res => res.json()) //fetchten sonra response'u parset
        .then(
            (result) => {
                //result gelirse datayı postList'e aktarmalı ve isLoaded'ı true stateine cekmeliyiz
                setIsLoaded(true);
                setPostList(result)
            },
            (error) => { 
                console.log(error)
                setIsLoaded(true);
                setError(error);

            }
        )
    }, [])

    if(error) {
        return <div> Error !!! </div> 
    } else if(!isLoaded) {
        return <div>Loading...</div>
    }else {
        return(
            <ul>
                {postList.map(post => (
                    <li>
                        {post.title} {post.text}
                    </li>
                ))}
            </ul>


        );
    }
}
//bilgi: fonksiyon kullanmak istersen parantez icine al
//disardan erismek isteyenler post ismiyle erissin
export default Post;