import React from 'react';

const Weather = (props) => {

    const { city, country, temp, weatherIcon, minTemp, maxTemp, desc, humidity } = props;

    return (
        <div className='container' style={styles.kont}>
            <div className='card text-center' style={styles.pozadina}>
                <div className='card-header'>
                    {
                        city && country && weatherIcon ? (
                            <div>
                                <i className={`wi ${weatherIcon} display-1`} />
                                <h2 style={styles.cityWH}>
                                    {city} , {country}
                                </h2>
                            </div>
                        ) : null
                    }
                </div>
                <div className='card-body'>
                    {
                        temp ? (
                            <h1 className='card-text'>
                                {temp}&deg;
                            </h1>
                        ) : null
                    }
                </div>
                <div className='card-footer'>
                    <h4 className='card-text'>
                        {getMinMaxTemp(minTemp, maxTemp)}
                    </h4>
                    <hr />
                    <h2>
                        {desc}
                    </h2>
                    {
                        humidity ? (
                            <div>
                              <p>Humidity: {humidity}%</p>
                            </div>
                        ) : null
                    }
                </div>

            </div>

        </div>
    );
}

const getMinMaxTemp = (min, max) => {
    if (min, max) {
        return (
            <div className='container-fluid'>
                <span>{min}&deg;{' '}</span>{' '}
                {' '}<span>{max}&deg;{' '}</span>
            </div>
        )
    }
}

const styles = {
    cityWH: {
        marginTop: '30px'
    },
    kont: {
        marginTop: '20px',
    },
    pozadina: {
        background: 'rgba(198, 198, 198, 0.7)',
    }
}

export default Weather;