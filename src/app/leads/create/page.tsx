'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import { ArrowLeft, ArrowRight, Check, Smartphone, Laptop, Tablet, Watch, Camera, Gamepad2, Headphones } from 'lucide-react';

interface FormData {
  // Step 1: Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  
  // Step 2: Device Information
  deviceType: string;
  deviceBrand: string;
  deviceModel: string;
  purchaseDate: string;
  deviceValue: string;
  deviceCondition: string;
  
  // Step 3: Protection Plan
  planType: string;
  coverageLevel: string;
  additionalCoverage: string[];
  
  // Step 4: Additional Information
  address: string;
  city: string;
  postcode: string;
  howDidYouHear: string;
  notes: string;
}

const CreateLeadForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    deviceType: '',
    deviceBrand: '',
    deviceModel: '',
    purchaseDate: '',
    deviceValue: '',
    deviceCondition: '',
    planType: '',
    coverageLevel: '',
    additionalCoverage: [],
    address: '',
    city: '',
    postcode: '',
    howDidYouHear: '',
    notes: '',
  });

  const steps = [
    { id: 1, title: 'Personal Information', description: 'Basic contact details' },
    { id: 2, title: 'Device Details', description: 'Device information' },
    { id: 3, title: 'Protection Plan', description: 'Choose your coverage' },
    { id: 4, title: 'Additional Info', description: 'Address and preferences' },
  ];

  const deviceTypes = [
    { id: 'smartphone', name: 'Smartphone', icon: Smartphone },
    { id: 'laptop', name: 'Laptop', icon: Laptop },
    { id: 'tablet', name: 'Tablet', icon: Tablet },
    { id: 'smartwatch', name: 'Smartwatch', icon: Watch },
    { id: 'camera', name: 'Camera', icon: Camera },
    { id: 'gaming', name: 'Gaming Console', icon: Gamepad2 },
    { id: 'headphones', name: 'Headphones', icon: Headphones },
  ];

  const planTypes = [
    { id: 'basic', name: 'Basic Protection', price: '£5.99', features: ['Accidental damage', 'Theft protection', '12-month coverage'] },
    { id: 'premium', name: 'Premium Protection', price: '£9.99', features: ['All basic features', 'Water damage', 'Screen replacement', '24-month coverage'] },
    { id: 'ultimate', name: 'Ultimate Protection', price: '£14.99', features: ['All premium features', 'Loss protection', 'Worldwide coverage', 'No excess fee'] },
  ];

  const coverageLevels = [
    { id: 'up-to-500', name: 'Up to £500', description: 'For devices worth up to £500' },
    { id: 'up-to-1000', name: 'Up to £1,000', description: 'For devices worth up to £1,000' },
    { id: 'up-to-2000', name: 'Up to £2,000', description: 'For devices worth up to £2,000' },
    { id: 'unlimited', name: 'Unlimited', description: 'No limit on device value' },
  ];

  const additionalCoverageOptions = [
    { id: 'screen-repair', name: 'Screen Repair', description: 'Cracked screen replacement' },
    { id: 'water-damage', name: 'Water Damage', description: 'Liquid damage protection' },
    { id: 'theft-protection', name: 'Theft Protection', description: 'Stolen device coverage' },
    { id: 'loss-protection', name: 'Loss Protection', description: 'Lost device coverage' },
    { id: 'worldwide', name: 'Worldwide Coverage', description: 'International protection' },
  ];

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Lead created successfully!');
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.deviceType && formData.deviceBrand && formData.deviceValue;
      case 3:
        return formData.planType && formData.coverageLevel;
      case 4:
        return formData.address && formData.city && formData.postcode;
      default:
        return false;
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Device Type *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deviceTypes.map((device) => {
            const Icon = device.icon;
            return (
              <button
                key={device.id}
                type="button"
                onClick={() => handleInputChange('deviceType', device.id)}
                className={`p-4 border-2 rounded-lg text-center transition-colors ${
                  formData.deviceType === device.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Icon className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                <div className="text-sm font-medium">{device.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Device Brand *
          </label>
          <input
            type="text"
            value={formData.deviceBrand}
            onChange={(e) => handleInputChange('deviceBrand', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Apple, Samsung, Sony"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Device Model *
          </label>
          <input
            type="text"
            value={formData.deviceModel}
            onChange={(e) => handleInputChange('deviceModel', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., iPhone 15, Galaxy S24"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Purchase Date
          </label>
          <input
            type="date"
            value={formData.purchaseDate}
            onChange={(e) => handleInputChange('purchaseDate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Device Value (£) *
          </label>
          <input
            type="number"
            value={formData.deviceValue}
            onChange={(e) => handleInputChange('deviceValue', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="500"
            min="0"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Device Condition
          </label>
          <select
            value={formData.deviceCondition}
            onChange={(e) => handleInputChange('deviceCondition', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select condition</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Protection Plan *
        </label>
        <div className="space-y-4">
          {planTypes.map((plan) => (
            <div
              key={plan.id}
              onClick={() => handleInputChange('planType', plan.id)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                formData.planType === plan.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{plan.name}</h3>
                <span className="text-lg font-bold text-blue-600">{plan.price}/month</span>
              </div>
              <ul className="space-y-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Coverage Level *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coverageLevels.map((level) => (
            <button
              key={level.id}
              type="button"
              onClick={() => handleInputChange('coverageLevel', level.id)}
              className={`p-4 border-2 rounded-lg text-left transition-colors ${
                formData.coverageLevel === level.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="font-medium text-gray-900">{level.name}</div>
              <div className="text-sm text-gray-600">{level.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Additional Coverage (Optional)
        </label>
        <div className="space-y-3">
          {additionalCoverageOptions.map((option) => (
            <label key={option.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={formData.additionalCoverage.includes(option.id)}
                onChange={(e) => {
                  const newCoverage = e.target.checked
                    ? [...formData.additionalCoverage, option.id]
                    : formData.additionalCoverage.filter(id => id !== option.id);
                  handleInputChange('additionalCoverage', newCoverage);
                }}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div>
                <div className="font-medium text-gray-900">{option.name}</div>
                <div className="text-sm text-gray-600">{option.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Address *
        </label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="123 Main Street"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City *
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Postcode *
          </label>
          <input
            type="text"
            value={formData.postcode}
            onChange={(e) => handleInputChange('postcode', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          How did you hear about us?
        </label>
        <select
          value={formData.howDidYouHear}
          onChange={(e) => handleInputChange('howDidYouHear', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select an option</option>
          <option value="google">Google Search</option>
          <option value="social-media">Social Media</option>
          <option value="friend">Friend/Family</option>
          <option value="advertisement">Advertisement</option>
          <option value="retailer">Retail Store</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Notes
        </label>
        <textarea
          value={formData.notes}
          onChange={(e) => handleInputChange('notes', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Any additional information about your device or requirements..."
        />
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Protection Plan Lead</h1>
          <p className="text-gray-600">Fill out the form below to create a new lead for gadget protection</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{step.id}</span>
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">{step.title}</div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-blue-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {steps[currentStep - 1].title}
            </h2>
            <p className="text-gray-600">
              {steps[currentStep - 1].description}
            </p>
          </div>

          {renderCurrentStep()}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`flex items-center px-4 py-2 border border-gray-300 rounded-lg transition-colors ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </button>

            <div className="flex space-x-3">
              {currentStep < steps.length ? (
                <button
                  onClick={handleNext}
                  disabled={!isStepValid(currentStep)}
                  className={`flex items-center px-6 py-2 rounded-lg transition-colors ${
                    isStepValid(currentStep)
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid(currentStep)}
                  className={`flex items-center px-6 py-2 rounded-lg transition-colors ${
                    isStepValid(currentStep)
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Check className="w-4 h-4 mr-2" />
                  Create Lead
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateLeadForm;
