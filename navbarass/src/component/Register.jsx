

function Register() {
  return (
    <div>
          <div className="container">
        <div className="col-md-6 offset-md-3">
            <form action="" method="post">
                <div classsName="form-group">
                    <h4> Register Here</h4>
                    <label htmlFor="Name"> Name</label>
                    <input type="text" name="name" className="form-control" />
                </div>
                <div classsName="form-group">
                    <label htmlFor="Email"> Emailaddress</label>
                    <input type="text" name="email" className="form-control" />
                </div>
                <div classsName="form-group">
                    <label htmlFor="phone"> phone Number</label>
                    <input type="text" name="phone" className="form-control" />
                </div>
                <div classsName="form-group">
                    <label htmlFor="phone"> password</label>
                    <input type="text" name="phone" className="form-control" />
                </div>
                <div classsName="form-group">
                    <label htmlFor="phone">confirm-password</label>
                    <input type="text" name="phone" className="form-control" />
                </div>
               <button type="submit" className="btn btn-success" >Register</button>
                
                
                </form>
        </div>
    </div>
    </div>
  )
}

export default Register