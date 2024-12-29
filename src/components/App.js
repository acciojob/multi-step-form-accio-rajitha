import React, { useState } from 'react';
import Step from './Step';
import './../styles/App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: ''
  });
  const [errors, setErrors] = useState({});

  // Handler for changing form data
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Validate form data for credit card and expiry date
  const validatePayment = () => {
    const newErrors = {};
    const cardInfo = formData.card_info.replace(/\D/g, ''); // Remove non-numeric characters
    if (cardInfo.length !== 12) {
      newErrors.card_info = 'Card number must be exactly 12 digits';
    }
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDateRegex.test(formData.expiry_date)) {
      newErrors.expiry_date = 'Expiration date must be in MM/YY format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Next button handler
  const nextStep = () => {
    if (currentStep === 3 && !validatePayment()) {
      return; // Stop navigation if there are validation errors
    }
    setCurrentStep(currentStep + 1);
  };

  // Previous button handler
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePayment()) return;
    console.log(formData); // For now, just log the collected data
    alert('Form submitted!');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Step
          currentStep={currentStep}
          formData={formData}
          handleInputChange={handleInputChange}
          prevStep={prevStep}
          nextStep={nextStep}
          errors={errors}
        />
        {currentStep > 1 && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}
        {currentStep < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {currentStep === 3 && (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
};

export default App;

/*
import React, { useState } from 'react';
import Step from './Step';
import './../styles/App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: ''
  });

  // Handler for changing form data
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Next button handler
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Previous button handler
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For now, just log the collected data
    alert('Form submitted!');
  };

  return (
    <div className="form-container">
     
      <form onSubmit={handleSubmit}>
        <Step
          currentStep={currentStep}
          formData={formData}
          handleInputChange={handleInputChange}
          prevStep={prevStep}
          nextStep={nextStep}
        />
        
        {currentStep > 1 && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}
        {currentStep < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {currentStep === 3 && (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
};

export default App;
/*
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
       
    </div>
  )
}

export default App
*/