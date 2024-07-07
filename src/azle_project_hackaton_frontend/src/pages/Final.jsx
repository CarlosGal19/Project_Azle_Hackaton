import SampleRecord from "../components/SampleRecord";

const Final = () => {
  const samples = [
    {
      id: 1,
      dateTime: '2024-07-07 14:30:00',
      tds: '150 ppm',
      temperature: '29°C',
      pH: '7.5',
      turbidity: '5 NTU',
      quantity: '100 liters',
    },
    {
      id: 2,
      dateTime: '2024-07-07 15:30:00',
      tds: '160 ppm',
      temperature: '26°C',
      pH: '7.4',
      turbidity: '6 NTU',
      quantity: '110 liters',
    },
    {
      id: 3,
      dateTime: '2024-07-07 16:30:00',
      tds: '170 ppm',
      temperature: '27°C',
      pH: '7.3',
      turbidity: '7 NTU',
      quantity: '120 liters',
    },
    // Add more sample data as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">Final Tests History</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {samples.map(sample => (
            <SampleRecord key={sample.id} data={sample} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Final;
