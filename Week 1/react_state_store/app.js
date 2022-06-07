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
        data: data,
        name: '',
        price: 0,
        description: 'Describe this item'
      }

    handleChange = (event) =>{
        console.log(event.target.value)
        this.setState({[event.target.id]: event.target.value})
      } 

    // handleChange = (event) =>{
    //     console.log(event.target.value)
    //     this.state.value = event.target.value
    //   }
    handleSubmit = (event) =>{
        event.preventDefault()
        console.log('you prevented the default');
      }

    render () {
        return (
            <div>
                <h1>Big Time Shopping</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} id='name' placeholder='name of product' />
                    <br />
                    <label htmlFor='price'>Price</label>
                    <input type='number' value={this.state.price} onChange={this.handleChange} id='price' />
                    <br />
                    <label htmlFor='description'>Description</label>
                    <input type='textarea' value={this.state.description} onChange={this.handleChange} id='description' />
                    <input type="submit" />
                </form>
                <div>
                    <h2>Preview our new item</h2>
                    <h3>{this.state.name}</h3>
                    <h4>{this.state.price}</h4>
                    <h5>{this.state.description}</h5>
                </div>
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