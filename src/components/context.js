import React from 'react'
const ProductContext = React.createContext();
class ProductProvider extends React.Component {
  state = {
    items: [],
    singleCharacter: null
  }
  componentDidMount() {
    this.getList();
  }
  getList() {
    fetch('https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=16f6dcc968e0f3d6c7ab76d2a302b7a1&hash=704650888f85324b7f80e0dd451b554e')
      .then(results => results.json())
      .then(data => {
        this.setState({
          items: data.data.results
        })
      })
  }
  getItem = (id) => {
    const singlecharacter = this.state.items.find(item => item.id === id);
    return singlecharacter;
  };
  handleDetail = (id) => {

    const singleCharacter = this.getItem(id);
    this.setState(() => {
      return { singleCharacter: singleCharacter }
    })
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail
        }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };