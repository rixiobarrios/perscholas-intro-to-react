// CREATE CLASS COMPONENT
// class ProductList extends React.Component {
//   state = {
//     inShoppingCart: false,
//   };

//   // Create a function to toggle the state of our shopping cart
//   handleCartToggle = (e) => {
//     // this.setState({
//     //   inShoppingCart: !this.state.inShoppingCart,
//     // });
//     console.log(e.target);
//   };

//   render() {
//     // Render the product list
// const productList = this.props.data.map((element) => {
//   return (
//     <li onClick={this.handleCartToggle}>
//       {element.name} {element.price}{" "}
//       {this.state.inShoppingCart ? <span>in shopping cart</span> : ""}
//     </li>
//   );
// });
// return <ul>{productList}</ul>;
//   }
// }

class ProductList extends React.Component {
    state = {
      inShoppingCart: false,
    };
  
    handleCartToggle = () => {
      this.setState({
        inShoppingCart: !this.state.inShoppingCart,
      });
    };
    render() {
      console.log(this.state);
      return (
        <li onClick={this.handleCartToggle}>
          {this.props.element.name}{" "}
          {this.state.inShoppingCart ? <span>in Shopping Cart</span> : null}
        </li>
      );
    }
  }
  
  /// CREATE CLASS COMPONENT TO RENDER DATA TO THE SCREEN
  class App extends React.Component {
    // INITIALIZE YOUR STATE
    state = {
      data: data,
      value: "",
      name: "",
      price: 0,
      description: "Describe this item",
      isHiring: true,
    };
  
    // CREATE A METHOD TO CHANGE USER INPUT
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
  
    // Create a method to submit the form
    handleFormSubmit = (e) => {
      e.preventDefault();
      // Lets add a new item to our data array
      const newItem = {
        name: this.state.name,
        price: this.state.price,
        description: this.state.description,
      };
  
      // Add the new item to our data array
      this.setState({
        data: [newItem, ...this.state.data],
      });
    };
  
    // CREATE A FUNCTION TO TOGGLE THE VALUE OF OUR HIRING STATE
    handleToggleHiring = () => {
      this.setState({
        isHiring: !this.state.isHiring,
      });
    };
  
    render() {
      // console.table(this.state.data);
      const dataList = this.state.data.map((element) => {
        return (
          <ul>
            {/* <li>
              {element.name} {element.price}
            </li> */}
            <ProductList element={element} />
          </ul>
        );
      });
      return (
        <div>
          <h1>Big Time Shopping</h1>
          <h2>
            {this.state.isHiring ? (
              <h2>Yes we are hiring</h2>
            ) : (
              <h2>Sorry try again tomorrow 🥲</h2>
            )}
          </h2>
          <button onClick={this.handleToggleHiring}>Toggle Hiring</button>
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="price">Price: </label>
            <input
              id="price"
              type="text"
              value={this.state.price}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input type="submit" />
          </form>
          <div>
            <h2>Preview our new item</h2>
            <h3>{this.state.name}</h3>
            <h4>{this.state.price}</h4>
            <h5>{this.state.description}</h5>
          </div>
          {dataList}
          {/* Passing props from App component to ProductList component */}
          {/* <ProductList data={data} handleCartToggle={this.handleCartToggle} /> */}
        </div>
      );
    }
  }
  
  // RENDER COMPONENT TO THE SCREEN
  ReactDOM.render(<App />, document.querySelector(".container"));