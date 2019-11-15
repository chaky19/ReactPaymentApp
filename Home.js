import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
//hoc //fucntion, we invokde to this fuction to bring back hoc


class Home extends Component {

    
    render(){
         
         console.log(this.props)

          const { posts } = this.props

          const postList = posts.length ? (
            
               posts.map((ps) =>{
                   
                return(
                    <div key={ps.id}>
                      <h3>{ps.title}</h3><br></br><br></br>
                      <p>{ps.body}</p><br/><br/>
                    </div>    
                    ) 

                 }
               )
          ) : (<h3>No data to show</h3>);
        
         return (
             <React.Fragment>
               <p>make your payment</p>
               {postList}
             </React.Fragment>  
         ) 
       
    }
}
//access state of the props
//taking state of redux store
const mapStateToProps = (state) =>{
 return{
    posts:state.posts
 }

}
//when we connect to redux it will know that what data we want to grab from redux - 'state.posts'

export default connect(mapStateToProps)(Home);
//connect is a () that return a hoc
//if a comp wants access to that store,, what we do we take some data from the store and we map that data to the props of our componenet


//  state = {
    //      posts:''
    //  }

    // componentDidMount(){
       
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res)=> {
    //         console.log(res)
    //         this.setState(
    //             {posts: res.data.slice(1,10)})
    //     })      
    // }       



    
        // const { posts } = this.state

        //   const postList = posts.length ? (
            
        //        posts.map((ps) =>{
                   
        //         return(
        //             <div key={ps.id}>
        //               <h3>{ps.title}</h3><br></br><br></br>
        //               <p>{ps.body}</p>
        //             </div>    
        //             ) 

        //          }
        //        )
        //   ) : (<h3>No data to show</h3>);
        // {postList}