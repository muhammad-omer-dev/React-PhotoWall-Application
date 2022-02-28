import React from 'react';
import Photo from './Photo';

// if you are using only render function in class then rule is to convert to stateless function instead of class

// Functional components
function PhotoWall(props){

    return (
        <div className="photo-grid">
            {props.posts.map((post,index)=> <Photo key={index} post={ post} onRemovePhoto={props.onRemovePhoto} />)}
        </div>
    )
}

// class componenets
// class PhotoWall extends Component{
//     render(){
//         return (
//             <div className="photo-grid">
//                 {this.props.posts.map((post,index)=> <Photo key={index} post={ post} />)}
//             </div>
//         )
//     }
// }

export default PhotoWall