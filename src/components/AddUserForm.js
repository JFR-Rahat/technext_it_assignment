const AddUserForm = () =>{
    return (
        <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <h2 className="text-center">Add a User</h2>
                    <div className="col shadow-lg p-3 mb-5">
                        <form onSubmit={(e)=>e.preventDefault()}>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your First Name" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your Last Name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your Email Address" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" name="address" placeholder="Enter your Address" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="company" className="form-label">Company Name</label>
                                <input type="text" className="form-control" id="company" name="company" placeholder="Enter your Company Name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Upload Image</label>
                                <input type="file" className="form-control" id="image" name="image" required />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary w-100">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default AddUserForm;