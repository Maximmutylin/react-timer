import React from 'react'

const Title = ({ handleSubmit, setName, setValue }) => {

    return (

        <>
            <div className="container">
                <div className="icon"><i className="fa-solid fa-clock fa-3x"></i></div>
                <h1>Создать новый таймер обратного отсчета</h1>

                <form onSubmit={handleSubmit} className="input">
                    <label >Заголовок для таймера</label>
                    <input type="text"
                        name="title-date"
                        placeholder="Заголовок"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label >Дата для отсчета</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        placeholder="06/06/2022"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <input type="submit" className='btn' />
                </form>

            </div>
        </>
    )
}

export default Title