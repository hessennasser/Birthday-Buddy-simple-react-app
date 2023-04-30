import React from 'react'

const Person = ({ person }) => {
    const { id, image, name, age } = person
    return (
        <article className="person">
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{age}</p>
            </div>
        </article>
    )
}

export default Person
