const App = () => {
  const autores = [
    'Carlos Alejandro Galindo Islas',
    'José Álvaro Esparza López',
    'Alan Gabriel Saldaña Guerrero',
    'Marco Antonio Lozano Arellano',
    'Erasmo Díaz Ruiz',
    'Angela Nayeli Luna Fabián'
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-blue-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-center text-3xl font-bold text-blue-800 mb-4">Water Treatment Project</h1>
          <p className="text-gray-700 mb-4">
            This project measures the pH, turbidity, TDS, water quantity, and temperature levels in a water treatment plant. It adds titanium dioxide, which, when exposed to UV rays, enhances bacterial death, and finally passes through an activated carbon filter.
          </p>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Mission</h2>
            <p className="text-gray-700">
              To provide innovative and efficient water treatment solutions, improving quality of life and caring for the environment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Vision</h2>
            <p className="text-gray-700">
              To be leaders in water treatment technology, offering the highest quality products and services globally.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Values</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Innovation</li>
              <li>Sustainability</li>
              <li>Quality</li>
              <li>Commitment</li>
              <li>Responsibility</li>
            </ul>
          </div>
        </div>

        {/* Agregar la sección de autores */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Project Authors</h2>
          <ul className="list-disc list-inside text-gray-700">
            {autores.map((autor, index) => (
              <li key={index}>
                {autor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
