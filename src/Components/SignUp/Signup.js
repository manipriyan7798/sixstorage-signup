import "./Signup.scss";
import {
  FormGroup,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonIcon from "@mui/icons-material/Person";

const Signup = () => {
  const [state, setState] = useState("");

  function handleChange(e) {
    e.preventDefault();

    setState(e.target.value);
  }

  return (
    <div className="signup-container">
      <div className="signup-container-text">
        <h1>Signup</h1>
        <Typography align="left">Welcome, we are happy to have you</Typography>
        <FormGroup>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            sx={{ m: 1.5 }}
            id="first-name"
            label="First Name"
            type="text"
          />

          <TextField
            sx={{ m: 1.5 }}
            id="last-name"
            label="Last Name"
            type="text"
          />

          <TextField
            sx={{ m: 1.5 }}
            // value={state}
            onChange={handleChange}
            id="e-mail"
            label="E-mail"
            type="email"
          />
          <TextField
            sx={{ m: 1.5 }}
            id="confirm-email"
            label="Confirm Email"
            type="email"
          />
          <TextField
            sx={{ m: 1.5 }}
            id="user-name"
            value={state}
            label="UserName"
            type="email"
          />

          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <RemoveRedEyeIcon />
                </InputAdornment>
              ),
            }}
            sx={{ m: 1.5 }}
            id="outlined-password-input"
            label="Password"
            type="password"
          />
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <RemoveRedEyeIcon />
                </InputAdornment>
              ),
            }}
            sx={{ m: 1.5 }}
            id="confirm-password-input"
            label="Confirm Password"
            type="password"
          />
          <Button variant="contained">Sign Up</Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Signup;
