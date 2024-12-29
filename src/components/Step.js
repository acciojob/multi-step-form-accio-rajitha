import React from 'react';

const Step = ({ currentStep, formData, handleInputChange, nextStep, prevStep, errors }) => {
  switch (currentStep) {
    case 1:
      return (
        <div id="step1">
          <h2>Customer Details</h2>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      );

    case 2:
      return (
        <div id="step2">
          <h2>Car Details</h2>
          <div>
            <label htmlFor="model">Brand:</label>
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="car_price">Model:</label>
            <input
              type="number"
              id="car_price"
              value={formData.car_price}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      );

    case 3:
      return (
        <div id="step3">
          <h2>Payment Details</h2>
          <div>
            <label htmlFor="card_info">Credit Card Number:</label>
            <input
              type="text"
              id="card_info"
              value={formData.card_info}
              onChange={handleInputChange}
              required
            />
            {errors.card_info && <p className="error">{errors.card_info}</p>}
          </div>
          <div>
            <label htmlFor="expiry_date">Expiration Date:</label>
            <input
              type="text"
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleInputChange}
              required
            />
            {errors.expiry_date && <p className="error">{errors.expiry_date}</p>}
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default Step;

/*
import React from 'react';

const Step = ({ currentStep, formData, handleInputChange, nextStep, prevStep }) => {
  switch (currentStep) {
    case 1:
      return (
        <div>
          <h2>Customer Details</h2>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      );

    case 2:
      return (
        <div>
          <h2>Car Details</h2>
          <div>
            <label htmlFor="model">Brand:</label>
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="car_price">Model:</label>
            <input
              type="number"
              id="car_price"
              value={formData.car_price}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      );

    case 3:
      return (
        <div>
          <h2>Payment Details</h2>
          <div>
            <label htmlFor="card_info">Credit Card Number:</label>
            <input
              type="text"
              id="card_info"
              value={formData.card_info}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="expiry_date">Expiration Date</label>
            <input
              type="text"
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default Step;
*/