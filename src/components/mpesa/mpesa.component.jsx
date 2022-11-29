import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./mpesa.styles.css";
class MpesaPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { phone } = this.state;

    try {
      //   await auth.signInWithEmailAndPassword(email, password);
      this.setState({ phone: "" });
    } catch (error) {
      console.log(error);
    }
  };

  //Function to get the value of the input field and set it as state.
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="mpesaContainer">
        <div id="mpesatext">
          <span>Enter your Mpesa phone number</span>
        </div>

        <form onSubmit={this.handleSubmit} className="mpesa-form">
          <FormInput
            name="phone"
            type="tel"
            label="phone number"
            handleChange={this.handleChange}
            value={this.state.phone}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">PAY</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default MpesaPopup;
