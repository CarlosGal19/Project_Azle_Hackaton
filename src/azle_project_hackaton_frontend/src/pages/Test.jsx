import { useState } from 'react';

const Test = () => {
  const [loading, setLoading] = useState({ initial: false, final: false });
  const [initialTestData, setInitialTestData] = useState(null);
  const [finalTestData, setFinalTestData] = useState(null);

  const handleInitialTest = () => {
    setLoading({ ...loading, initial: true });
    setTimeout(() => {
      setInitialTestData({
        dateTime: '2024-07-07 14:30:00',
        tds: '150 ppm',
        temperature: '25°C',
        pH: '7.5',
        turbidity: '5 NTU',
        quantity: '100 liters',
      });
      setLoading({ ...loading, initial: false });
    }, 3000);
  };

  const handleFinalTest = () => {
    setLoading({ ...loading, final: true });
    setTimeout(() => {
      setFinalTestData({
        dateTime: '2024-07-07 16:30:00',
        tds: '160 ppm',
        temperature: '26°C',
        pH: '7.4',
        turbidity: '6 NTU',
        quantity: '110 liters',
      });
      setLoading({ ...loading, final: false });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">Test Actions</h1>
        <div className="mb-4">
          <button
            onClick={handleInitialTest}
            className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-950"
            disabled={loading.initial}
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
                <p><strong>Date and Time:</strong> {initialTestData.dateTime}</p>
                <p><strong>TDS:</strong> {initialTestData.tds}</p>
                <p><strong>Temperature:</strong> {initialTestData.temperature}</p>
                <p><strong>pH:</strong> {initialTestData.pH}</p>
                <p><strong>Turbidity:</strong> {initialTestData.turbidity}</p>
                <p><strong>Quantity:</strong> {initialTestData.quantity}</p>
              </div>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={handleFinalTest}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            disabled={loading.final}
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
                <p><strong>Date and Time:</strong> {finalTestData.dateTime}</p>
                <p><strong>TDS:</strong> {finalTestData.tds}</p>
                <p><strong>Temperature:</strong> {finalTestData.temperature}</p>
                <p><strong>pH:</strong> {finalTestData.pH}</p>
                <p><strong>Turbidity:</strong> {finalTestData.turbidity}</p>
                <p><strong>Quantity:</strong> {finalTestData.quantity}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;
