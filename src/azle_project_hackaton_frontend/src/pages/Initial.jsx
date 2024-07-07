import SampleRecord from "../components/SampleRecord";
import Alert from "../components/Alert";
import { useEffect, useState } from "react";
import { useAuth, useRestActor } from "@bundly/ares-react";

const Initial = () => {
  const backend = useRestActor('azle_project_hackaton_backend');
  const { isAuthenticated } = useAuth();

  const [alert, setAlert] = useState(null);
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!isAuthenticated) {
          setAlert({
            type: 'alert',
            message: 'You need to be authenticated to see this page',
          });
          return;
        }

        const response = await backend.get('initial_samples');
        setSamples(response.data.message);

        if (response.data.message.length === 0) {
          setAlert({
            type: 'alert',
            message: 'No samples found',
          });
        } else {
          setAlert(null);
        }
      } catch (error) {
        setAlert({
          type: 'error',
          message: 'An error occurred while fetching the data',
        });
      }
    }

    fetchData();
  }, [samples.length, isAuthenticated]); // Include backend and isAuthenticated in dependencies

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">Initial Tests History</h1>
        {
          samples.length === 0 ? (
            <Alert data={alert} />
          ) : (
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {samples.map(sample => (
                <SampleRecord key={sample.id} data={sample} />
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Initial;
