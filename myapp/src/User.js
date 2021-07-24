import {withRouter} from 'react-router-dom'
import React from 'react';
function User(props)
{
    console.warn(props)
    return(
    
                    
        <div class="modal fade" id="myModal1" role="dialog">
        <div class="modal-dialog">
        
          {/* <!-- Modal content--> */}
          <div class="modal-content">
            <div class="modal-header">
              {/* <button type="button" class="close" data-dismiss="modal">&times;</button> */}
              <h4 class="modal-title" text-align='center'>Hero Details</h4>
            </div>
            <div class="modal-body">
            <div><h5>Hero ID: {props.match.params.id}</h5>
               <h5>Hero Name: {props.match.params.name}</h5></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
          
        </div>
      </div>
          
            
    
            


    )
}
export default withRouter(User);
