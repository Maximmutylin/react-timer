import React, { useEffect, useState } from 'react'

const Hide = ({ value, name, setOnButton, setName, setValue }) => {

    const [now, setNow] = useState(new Date().getTime())
    const distance = new Date(value).getTime() - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    useEffect(() => {
        if (distance > 0) {
            setInterval(() => setNow(new Date().getTime()), second);
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="output">
                <h2 className="complete"> {`Ваш заголовок: ${name}`} </h2>

                <div className="time-labels">
                    <p>Days</p>
                    <p>Hours</p>
                    <p>Mins</p>
                    <p>Secs</p>
                </div>
                <div id="output">
                    <div className="numbers">
                        {
                            distance < 0
                                ? `Время вышло ${value}`
                                : `${days < 10 ? `0${days}` : days}: ${hours < 10 ? `0${hours}` : hours}: ${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`
                        }
                    </div>
                </div>
                <button onClick={() => {
                    setOnButton(false)
                    setValue(0)
                    setName('')
                }}
                    className="btn btn-reset " id="btn-reset">Сбросить</button>
            </div>

        </>
    )
}

export default Hide