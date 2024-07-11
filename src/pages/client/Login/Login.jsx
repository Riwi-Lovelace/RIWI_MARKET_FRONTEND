import '../user.css'


const Login  = ()=>{
    return(
        <>
        <div className="Login-box-ground">
            <div className='container-LG'>
                    <div className='section1'>
                        <h1>Login</h1>

                        <div className='box-input-user'>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username'/>
                        </div>
                        <div className='box-input-pass'>
                            <label htmlFor="Password">Password</label>
                            <input type="password" name='Password'/>
                        </div>
                    </div>
               
            </div>



        </div>
        </>
    )
}

export default Login