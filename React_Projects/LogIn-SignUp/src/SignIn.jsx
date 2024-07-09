import { Link } from 'react-router-dom';
import './index.css'; // Ensure correct path to the CSS file

function SignIn() {
    return (
        <>
            <div className="container-fluid w-50 p-5">
                <div className='card '>
                    <div className="card-title bg-primary border border-top border-primary semiRoundBorderBottom">
                        <h1 className="text-center text-light">SignIn</h1>
                    </div>
                    <form action="#" className='form d-flex flex-column align-items-center m-4'>
                        <input type="text" placeholder="Email Id" className='form-control p-2 mb-2' />
                        <input type="password" placeholder="Create Password" className='form-control p-2 mb-2' />                        
                        <input type="password" placeholder="Confirm Password" className='form-control p-2 mb-2' />
                        <div className='form-check mt-2'>
                            <input type="checkbox" className='form-check-input' id='terms' />
                            <label htmlFor='terms' className='form-check-label'>
                                <em>I accept all the <a href="#" className='text-decoration-none'>terms and conditions.</a></em>
                            </label>
                        </div>
                        <button className='form-control btn btn-outline-dark justify-content-center w-50 mt-2'>Submit</button>                     
                    </form>
                    <Link to="/" className='text-decoration-none'><button className="form-control btn btn-outline-primary semiRoundBorderTop text-center form-control-sm mt-3 p-2">LogIn</button></Link>
                </div>
            </div>
        </>
    );
}

export default SignIn;
