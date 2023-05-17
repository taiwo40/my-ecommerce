

function login() {
  return (
    <div>
        <h2> Login</h2>
         <div>
          <div className="container">
        <div className="col-md-6 offset-md-3">
            <form action="" method="post">
                <div classsName="form-group">
                    <label htmlFor="Name"> Name</label>
                    <input type="text" name="name" className="form-control" />
                </div>
                <div classsName="form-group">
                    <label htmlFor="Email"> Emailaddress</label>
                    <input type="text" name="email" className="form-control" />
                </div>
              
               <button type="submit" className="btn btn-success" >Register</button>
                
                
                </form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default login