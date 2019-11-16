import React from 'react';
import './forma.css';


const Form = (props) => {
    return ( 
        <div className='container text-center' style={styles.forma}>
            {
                props.error ? (
                    <div>
                        {error()}
                    </div>
                ) : null
            }
           <form onSubmit={props.loadWeather}>
               <div className='row'>
                 <div className='col-md-6'>
                 <input type='text' 
                      name='city' 
                      placeholder='City' 
                      className='form-control'
                      autoComplete='off'
                      style={styles.inp}
                      />
                 </div>
                 <div className='col-md-6'>
                 <input type='text' 
                      name='country' 
                      placeholder='Country' 
                      className='form-control'
                      autoComplete='off'
                      style={styles.inp}
                      />
                 </div>
               </div>
                <button className='btn btn-warning' style={styles.btn}>Get Weather</button>
           </form>
        </div>
     );
}

const error = () => {
    return (
        <div className='alert alert-danger' role='alert'>
             <h4>You must enter all fields.</h4>
        </div>
    )
}

const styles = {
    forma: {
        marginTop: '50px',
    },
    btn: {
        marginTop: '20px',
        padding: '10px'
    },
    inp: {
        background: 'transparent',
        
    }

}
 
export default Form;