import React from 'react';


export default class  Person extends React.Component{
    

render(){
    const style={
        backgroundColor:'violet',
        fontSize:'30px',
        textAlign:'left'    
    };
    return(
        <div>
            <h1 style={style}>ydkpb{this.props.nam}</h1>
            <h1>ydkpb{this.props.children }</h1>
        </div>
    )
}
}

