import React from "react";

const Info = ({ text, visible }) => {

    if(text){
        return (
            <>
                <div id="description">
                    {visible ?
                        <div id="infoText">
                            {text}
                        </div>
                        :
                        null
                    }
                </div>
            </>
        )
    }
    return null;
    
}

export default Info;