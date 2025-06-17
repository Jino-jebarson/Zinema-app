import  { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!user.trim()) newErrors.user = "Username is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      navigate('/');
    }
  };

  return (
    <div className="container mt-5 ">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit} noValidate>

        <div className="mb-3 align-items-center">
          <label htmlFor="username" className="col-sm-6  col-form-label">Username</label>
          <div className="col-sm-6">
            <input
              type="text"
              className={`form-control ${errors.user ? 'is-invalid' : ''}`}
              id="username"
              placeholder="Enter username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {errors.user && <div className="invalid-feedback">{errors.user}</div>}
          </div>
        </div>

        <div className="mb-3  align-items-center">
          <label htmlFor="email" className="col-sm-6 col-form-label">Email address</label>
          <div className="col-sm-6">
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
        </div>

        <div className="d-flex">
          <button type="submit" className="btn btn-primary px-4">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

