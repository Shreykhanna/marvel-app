import React from 'react';
import Characters from './Characters'
import { ProductConsumer } from './context'
import Title from './Title'
export default class CharacterList extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [],
        }
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
            }
            )
    }
    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <Title  title="Marvel Characters"/>
                        <div className="row">
                        <ProductConsumer>
                            {
                                value => {
                                    return value.items.map(item => {
                                        return <Characters key={item.id} item={item} />
                                    });
                                }
                            }
                        </ProductConsumer>
                        
                        </div>
                </div>
            </div>
        )
    }
}