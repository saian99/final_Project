class App extends React.Component {
  state = {
    grub:[]
  }

  createGrub = (event) => {
    event.preventDefault();
    axios.post(
      '/grub',
      {
        name:this.state.newGrubName,
        address:this.state.newGrubAddress,
        description:this.state.newGrubDescription,
      }
    ).then(
      (response) => {
        this.setState({
          grub:response.data
        })
      }
    )
  }

  changeNewGrubName = (event) => {
    this.setState({
      newGrubName:event.target.value
    });
  }

  changeNewGrubAddress = (event) => {
    this.setState({
      newGrubAddress:event.target.value
    });
  }

  changeNewGrubDescription = (event) => {
    this.setState({
      newGrubDescription:event.target.value
    });
  }

    render = () => {
        return <div className="container">
        <div className="head">
          <h1>Grub Spots!</h1>
        </div>
        <div className="create">
          <h2>Add Resturant</h2>
          <form onSubmit={this.createGrub}>
            <input onKeyUp={this.changeNewGrubName} type="text" placeholder="name"/><br/>
            <input onKeyUp={this.changeNewGrubAddress} type="text" placeholder="address"/><br/>
            <input onKeyUp={this.changeNewGrubDescription} type="text" placeholder="description"/><br/>
            <input type="submit" value="Add"/>
            </form>
            <h2>List of Resturants</h2>
            <ul>
            {
              this.state.grub.map(
                (food) => {
                  return <li>
                      {food.name}<br/>
                      {food.address}<br/>
                      {food.description}<br/>
                  </li>
                }
              )
            }
            </ul>
        </div>
      </div>;

    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
