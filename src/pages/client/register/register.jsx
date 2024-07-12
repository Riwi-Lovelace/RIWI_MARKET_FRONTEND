
import '../user.css'


const Register  = ()=>{
    return(
        <>
        <div className="Login-box-ground">
            <div className='container-LG'>
                    <div className='section1'>
                        <h1>Register</h1>

                        <div className='box-input-user'>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username'/>
                        </div>
                        <div className='box-input-pass'>
                            <label htmlFor="Password">Password</label>
                            <input type="password" name='Password'/>
                        </div>
                         <div className='box-input-pass'>
                            <label htmlFor="Password">confirm Password</label>
                            <input type="password" name='Password'/>
                        </div>


                        <button className='but-ing-auth'>Register</button>
                        
                        <p>you Have a account?</p>
                        <a href="/login">Login</a>
                    </div>
                    <div className='section2'>
                        <img src="" alt="" />
                    </div>
               
            </div>



        </div>
        </>
    )
}

export default Register