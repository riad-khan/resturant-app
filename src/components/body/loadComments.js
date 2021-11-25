import React from "react";

const loadComments = props =>{
    return(
        
      props.comments.map( comment =>{
          return(
              
              <div key={comment.id}>
                  
                  <h5>{comment.author}</h5> <hr />
                  <p>{comment.comment}</p> <hr />
                  <p>{comment.date}</p>

              </div>
          );
      })

        
    );
}

export default loadComments