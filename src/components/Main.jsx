import React, { useState } from 'react'
import Title from './Title'
import Hide from './Hide'

const Main = () => {

    const [name, setName] = useState('');
    const [value, setValue] = useState(0);
    const [onButton, setOnButton] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert('Введите что-то в заголовок')
            return
        }

        if (!value) {
            alert('Введите что-то в дату')
            return
        }

        setOnButton(true);
    }

    return (
        !onButton
            ? <Title handleSubmit={handleSubmit} setName={setName} setValue={setValue} value={value} />
            : <Hide setName={setName} name={name} setValue={setValue} value={value} onButton={onButton} setOnButton={setOnButton} />
    )
}

export default Main