console.table(data);

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
        description: 'Describe this item',
        isHiring: true
      }

    handleChange = (event) =>{
        console.log(event.target.value)
        this.setState({[event.target.id]: event.target.value})
      } 

    handleSubmit = (event) =>{
        event.preventDefault()
        const newItem = {
          name: this.state.name,
          price: this.state.price,
          description: this.state.description
        }
        this.setState({
          data: [ newItem, ...this.state.data],
          name: '',
          price: 0,
          description: 'Describe this item'
        })
      }

      handleToggleHiring = () => {
        this.setState({isHiring: !this.state.isHiring})
      }      

    render () {
        return (
            <div>
                <h1> Big Time Shopping </h1>
                {!this.state.isHiring ? <h2>Yes, we are hiring </h2>: <h2>Sorry, try again tomorrow</h2>}
                <button onClick={this.handleToggleHiring}>Toggle Hiring</button>
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