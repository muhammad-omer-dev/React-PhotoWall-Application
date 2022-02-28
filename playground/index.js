import React  from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
// const tasks = ['Take out the trash','shovel the driveway','walk the dog'];

//simple h1 element create element takes input (property, props , value)

// const element = React.createElement('h1',null,'hello world');

//Create ordered list using react element

// const element = React.createElement('ol',null,
// React.createElement('li',null,'Take out the trash'),
// React.createElement('li',null,'shovel the driveway'),
// React.createElement('li',null,'walk the dog')
// )

//Create ordered list using react element with array of tasks

// const element = React.createElement('ol',null,
// tasks.map((task,index)=> React.createElement('li',{key:index},task))
// );


// Create using JSX
// JSX elements must be wrapped in enclosing tag which should be div
// const element = 
// <div>
//   <h1>Take List</h1>
//   <ol>
//   {tasks.map((task,index)=><li key={index}>{task}</li>)}
//   </ol>
//   </div>

// making component for ordered list 

// class List extends Component{
//   render() {
//     return (
//         <ol>
//         {this.props.tasks.map((task,index)=><li key={index}>{task}</li>)}
//         </ol>
//     )
//   }
// }

// making componenet for h1
// class Title extends Component{
//   render() { 
//     return (
//     <h1>{this.props.title}</h1>
//   )
//   }
// }

// class Main extends Component{
//   render(){
//     return (<div>
//             <Title title={'toDOs'}/>
//             <List tasks={['Mow the lawn','walk the dog']}/>
//             <List tasks={['hose the driveway','finish the laundry']}/>
//           </div>
//     )
//   }
// }
//return components
ReactDOM.render(<Main/>, document.getElementById('root'));

// returning elements
// ReactDOM.render(element, document.getElementById('root')); //render on a dom node called root