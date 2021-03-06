import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'
 
class Main extends Component{
  // the constructor methods gets called once before it is inserted in DOM should not contain logic or change in UI should only contain state or bind methods to proper context
  constructor(){
     super()
     this.state = {
       posts:[{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
        }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }],
              
     }
     this.removePhoto= this.removePhoto.bind(this)
    }
    //this not working because 'this' is part of an event handler and is in context of a fucntion not our component which is null bydefault so we will have to set it to instance
    removePhoto(postRemoved){
      console.log(postRemoved.description)
      this.setState((state)=>({
        posts:state.posts.filter(post => post!==postRemoved )
      }))
    }
    componentDidMount(){
      // console.log("Component DId Mount")
    //   const data= SimulateFetchFromDatabase()
    //   this.setState({
    //     posts:data
    //   })
    }
    componentDidUpdate(prevProps, prevState){
      // alert('re render')
      console.log(prevState.posts)
      console.log(this.state)
    }
    // render should never trigger any async code or ajax request or anything of that nature should only be rendering UI based on the props or the states passed to it
    render(){
      return (<div>
              <Title title={'Photowall'}/>
              <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
            </div>
      )
    }
  }



function SimulateFetchFromDatabase(){
  return [{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    "3919321_1443393332_n.jpg"
    }, {
    id: "1",
    description: "Aliens???",
    imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
    "08323785_735653395_n.jpg"
    }, {
    id: "2",
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
}
export default Main;