// console.log(data);

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hi there! </h1>
//                 <ul>
//                     {data.map(item => <li>{item.name}</li>)}
//                 </ul>
//             </div>
//         )
//     }
// }

class App extends React.Component {
//old syntax
//     constructor(props) {
//         super(props)
//         this.state = {
//             data:data
//         }
//     }
// }

constructor (props) {
            super(props)
    this.handleChange = this.handleChange.bind(this)
  }

    //new syntax
    state = {
        data:data,
        value:""
    }

    handleChange(event){
        console.log(event.target.value)
        this.setState({value: event.target.value})
      }    

    // handleChange = (event) =>{
    //     console.log(event.target.value)
    //     this.state.value = event.target.value
    //   }

    render () {
        return (
            <div>
                <h1>Big Time Shopping</h1>
                <form>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </form>
                <ul>
                {this.state.data.map(data => {
                    return (
                    <li>{data.name}  {data.price}</li>)}
                    )
                }
                </ul>
            </div>
    )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector(".container")
)