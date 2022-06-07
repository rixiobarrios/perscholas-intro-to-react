console.log(data);

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

    //new syntax
    state = {
        data:data
    }

    render () {
        return (
            <div>
                <h1>Big Time Shopping</h1>
            </div>
    )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector(".container")
)