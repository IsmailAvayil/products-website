import React from "react";

function Loader(){
  return(
    <div class="ui segment load-container" style={{margin:"auto"}}>
      <div class="ui active dimmer">
        <div class="ui indeterminate text loader">Preparing Data</div>
      </div>
    </div>    
  )
}

export default Loader;