import React from 'react'
import { ProductConsumer } from './context'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'

export default class characterdetails extends React.Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const { name, thumbnail, description, comics, stories, modified } = value.singleCharacter
                        return (
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h1>{name}</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="CharacterImage" className="img-fluid" />
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">  Character Description  </p>
                                        <p className="text-muted lead">{description}</p>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0"> Comics Available  </p>
                                        <p className="text-muted lead">{comics.available}</p>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">  Stories Available  </p>
                                        <p className="text-muted lead">{stories.available}</p>  
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">  Last Modified  </p>
                                        <p className="text-muted lead">{modified}</p>
                                        <Link to="/">
                                            <ButtonContainer>Back to homepage</ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }}

            </ProductConsumer>
        )
    }
}


