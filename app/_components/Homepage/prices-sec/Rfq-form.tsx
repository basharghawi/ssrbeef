"use client"
import { FunctionComponent, useState } from 'react';
import "./rfq-form.css";
import { useLang } from '@/app/_contexts/LangContext';

interface RfqType {
  id: number;
  nameEn: string;
  nameAr: string;
}

interface Props {
  rfqTypes: RfqType[]
}

const RfqForm: FunctionComponent<Props> = ({rfqTypes}) => {
  const { lang } = useLang();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    requestType: '',
    description: '',
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
      const response = await fetch('https://reellanceapi.reellance.com/api/Rfq/RequestRfq', {
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
    <form className="rfq-form relative" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6">
          <div className="form-group">
            <label className="visually-hidden" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6">
          <div className="form-group">
            <label className="visually-hidden" htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
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
            <label className="visually-hidden" htmlFor="requestType">Request Type</label>
            <select name="requestType" id="requestType" defaultValue={'default'} onChange={handleChange}>
              <option value="default" disabled>Request Type</option>
              {
                rfqTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {
                      lang === 'ltr' ? type.nameEn : type.nameAr
                    }
                  </option>
                ))
              }
            </select>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
      <button className="rfq-form__btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}

export default RfqForm;