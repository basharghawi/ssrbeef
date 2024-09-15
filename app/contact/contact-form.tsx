"use client"
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    setIsSubmitting(true);

    try {
      const response = await fetch('https://reellanceapi.reellance.com/api/Home/ContactUs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        // console.log('Form successfully submitted:', result);
        alert(result.successMessage)
        // Handle success, e.g., show a success message
      } else {
        console.error('Failed to submit form:', response.status);
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      // Handle network or other errors
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="conatct-form">
      <h2>Send a Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <div className="form-group">
              <label className="visually-hidden" htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <div className="form-group">
              <label className="visually-hidden" htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <div className="form-group">
              <label className="visually-hidden" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <div className="form-group">
              <label className="visually-hidden" htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <button className="conatct-form__btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send A Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
