import { Link } from 'react-router-dom';
import './index.css'; // Ensure correct path to the CSS file

function LogIn() {
    return (
        <>
            <div className="container-fluid w-50 p-5">
                <div className='card '>
                    <div className="card-title bg-primary border border-top border-primary semiRoundBorderBottom">
                        <h1 className="text-center text-light">LogIn</h1>
                    </div>
                    <form action="#" className='form d-flex flex-column align-items-center m-4'>
                        <input type="text" placeholder="Email Id" className='form-control p-2 mb-2' />
                        <input type="password" placeholder="Password" className='form-control p-2 mb-2' />
                        <button className='form-control btn btn-outline-dark justify-content-center w-50 mt-2'>Submit</button>
                    </form>
                    <a href="#" className="text-end me-3 text-decoration-none link-danger"><small><em>Forget Password ?</em></small></a>
                    <Link to="/signin" className='text-decoration-none'><button className="form-control btn btn-outline-primary semiRoundBorderTop text-center form-control-sm mt-3 p-2">SignIn</button></Link>
                </div>
            </div>
        </>
    );
}

export default LogIn;
