import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const errors = {
      nameError: "",
      emailError: "",
      messageError: "",
    };

    if (formData.name.trim() === "") {
      isValid = false;
      errors.nameError = "This field is required.";
    }

    if (formData.email.trim() === "") {
      isValid = false;
      errors.emailError = "Invalid email address.";
    } else if (!isValidEmail(formData.email)) {
      isValid = false;
      errors.emailError = "This field is required.";
    }

    if (formData.message.trim() === "") {
      isValid = false;
      errors.messageError = "This field is required.";
    }

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    console.log("Form data:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setFormErrors({
      nameError: "",
      emailError: "",
      messageError: "",
    });
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.nameError && (
          <small className="text-danger">{formErrors.nameError}</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.emailError && (
          <small className="text-danger">{formErrors.emailError}</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {formErrors.messageError && (
          <small className="text-danger">{formErrors.messageError}</small>
        )}
      </div>
      <button type="submit" className="btn">
        SUBMIT
      </button>
    </form>
  );
};

export default Contact;
