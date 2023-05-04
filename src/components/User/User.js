import React from "react";
import { useParams } from "react-router-dom"; //user linkindeki parametre linkini almak için

function User(){

    const {userId} = useParams();
    return(
        <div>
            User!! {userId}
        </div>
    )

}