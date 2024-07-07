import React, { useState, useEffect } from 'react';
import Alert from '../components/Alert';
import { useAuth, useRestActor } from '@bundly/ares-react';

const Test = () => {
  const { isAuthenticated } = useAuth();
  const [alert, setAlert] = useState(null);

  const backend = useRestActor('azle_project_hackaton_backend');

  const [loading, setLoading] = useState({ initial: false, final: false });
  const [initialTestData, setInitialTestData] = useState(null);
  const [finalTestData, setFinalTestData] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      setAlert({
        type: 'alert',
        message: 'You need to be authenticated to see this page',
      });
    } else {
      setAlert(null);
    }
  }, [isAuthenticated]);

  const handleInitialTest = async () => {
    setLoading({ ...loading, initial: true });
    try {
      const response = await backend.post("initial_sample", {
        id: String(Date.now()),
        dateTime: new Date('2024-07-07T14:30:00'), // Adjusted date format
        tds: 150,
        temperature: 25,
        pH: 7.5,
        turbidity: 5,
        quantity: 100,
      },{
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response.data.message);
      setInitialTestData(response.data.sample); // Assuming backend returns the saved sample
    } catch (error) {
      console.error('Error adding initial sample:', error);
      // Handle error display or retry logic
    } finally {
      setLoading({ ...loading, initial: false });
    }
  };

  const handleFinalTest = async () => {
    setLoading({ ...loading, final: true });
    try {
      const response = await backend.post("final_sample", {
        id: String(Date.now()),
        dateTime: new Date('2024-07-07T14:30:00'),
        tds: 150,
        temperature: 25,
        pH: 7.5,
        turbidity: 5,
        quantity: 100,
      },{
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response.data.message);
      setInitialTestData(response.data.sample);
    } catch (error) {
      console.error('Error adding initial sample:', error);
      // Handle error display or retry logic
    } finally {
      setLoading({ ...loading, final: false });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">Test Actions</h1>
        {alert ? (
          <Alert data={alert} />
        ) : (
          <>
            <div className="mb-4">
              <button
                onClick={handleInitialTest}
                className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
                disabled={loading.initial || !isAuthenticated}
              >
                Start Initial Test
              </button>
              {loading.initial && (
                <div className="flex justify-center mt-2">
                  <div className="loader border-t-4 border-blue-800 rounded-full w-8 h-8 animate-spin"></div>
                </div>
              )}
              {initialTestData && !loading.initial && (
                <div className="mt-4 bg-white p-4 rounded-lg shadow-lg border border-blue-800">
                  <h2 className="text-xl font-bold text-blue-800 mb-2">Initial Test Data</h2>
                  <div className="text-gray-700">
                    <p><strong>Date and Time:</strong> {new Date(initialTestData.dateTime).toLocaleString()}</p>
                    <p><strong>TDS:</strong> {initialTestData.tds}</p>
                    <p><strong>Temperature:</strong> {initialTestData.temperature}°C</p>
                    <p><strong>pH:</strong> {initialTestData.pH}</p>
                    <p><strong>Turbidity:</strong> {initialTestData.turbidity}</p>
                    <p><strong>Quantity:</strong> {initialTestData.quantity} liters</p>
                  </div>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={handleFinalTest}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                disabled={loading.final || !isAuthenticated}
              >
                Start Final Test
              </button>
              {loading.final && (
                <div className="flex justify-center mt-2">
                  <div className="loader border-t-4 border-green-500 rounded-full w-8 h-8 animate-spin"></div>
                </div>
              )}
              {finalTestData && !loading.final && (
                <div className="mt-4 bg-white p-4 rounded-lg shadow-lg border border-green-500">
                  <h2 className="text-xl font-bold text-green-500 mb-2">Final Test Data</h2>
                  <div className="text-gray-700">
                    <p><strong>Date and Time:</strong> {new Date(finalTestData.dateTime).toLocaleString()}</p>
                    <p><strong>TDS:</strong> {finalTestData.tds} ppm</p>
                    <p><strong>Temperature:</strong> {finalTestData.temperature}°C</p>
                    <p><strong>pH:</strong> {finalTestData.pH}</p>
                    <p><strong>Turbidity:</strong> {finalTestData.turbidity} NTU</p>
                    <p><strong>Quantity:</strong> {finalTestData.quantity}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Test;
