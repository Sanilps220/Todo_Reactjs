import React from 'react';

function Contact(props){
   var st =  {fontSize:'24px'}
    return(
        <div>
           <p style={ st}> a sas</p>
            <h1>{props.name} contact </h1>
            <label>Email Id:</label>
            <input type='text' /> 
            <br />
            <label>Message</label>
            <textarea>                
            </textarea>
            <button>Send</button>
        </div>
    )
}

export default Contact;