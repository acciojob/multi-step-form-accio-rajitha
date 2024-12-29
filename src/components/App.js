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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });

    // Validate input only for payment details fields when on step 3
    if (currentStep === 3) {
      validatePaymentInput(id, value);
    }
  };

  const validatePaymentInput = (id, value) => {
    const newErrors = { ...errors };

    if (id === 'card_info' && value.replace(/\D/g, '').length !== 12) {
      newErrors.card_info = 'Card number must be exactly 12 digits';
    } else {
      delete newErrors.card_info;
    }

    if (id === 'expiry_date' && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
      newErrors.expiry_date = 'Expiration date must be in MM/YY format';
    } else {
      delete newErrors.expiry_date;
    }

    setErrors(newErrors);  // Update errors state
  };

  const nextStep = () => {
    if (currentStep === 3 && Object.keys(errors).length > 0) {
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      alert('Please fix the errors before submitting.');
      return;
    }
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