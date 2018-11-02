import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        //imageUrl: "https://picsum.photos/200/"
    };

   /* styles = {
        fontSize: '20px',
        fontWeight: 'bold'
    };*/
        render() { 

            //let classes = this.getBadgeClasses(); we don't need seprate variable here.

        return (
                <React.Fragment>
                    {/* <img src={this.state.imageUrl} alt='' />  */ }
                    {/*<span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()} </span> --  When we wanna get multiple
                        styles we can write like that style={this.styles}  If we give only one style then write below syntax*/}

                    {/* <span style={{fontSize: 20}} className='badge badge-primary m-2'>{this.formatCount()} </span> */}
                    {/* <span className={classes}> {this.formatCount()} </span>  here we uses classes */} 
                        
                    <span className={this.getBadgeClasses()}> {this.formatCount()} </span> 
                    <button className='btn btn-secondry btn-sm'>Increment</button>
                </React.Fragment>
                );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
        //return this.state.count === 0 ? 'Zero' : this.state.count; // Here we replace it to using Object Destructuring
    }
}

export default Counter;