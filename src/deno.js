import React from "react";
var x  =30;
function test(){
    x++;
    alert(x)
}
function demo(){

    return(
        <div>
            <button onClick={ test }>Ok</button>
        </div>
    )
}
export default demo;      