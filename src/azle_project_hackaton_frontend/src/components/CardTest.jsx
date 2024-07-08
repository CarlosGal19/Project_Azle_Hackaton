const CardTest = ({color, data, title}) => {

    const initialTestData = data;

    const { tds, temperature, pH, turbidity, quantity } = initialTestData;

    return (
        <div className={`mt-4 bg-white p-4 rounded-lg shadow-lg border border-${color}-800`}>
            <h2 className="text-xl font-bold text-blue-800 mb-2">{title}</h2>
            <div className="text-gray-700">
                <p><strong>Date and Time:</strong> {new Date(initialTestData.dateTime).toLocaleString()}</p>
                <p><strong>TDS:</strong> {tds}</p>
                <p><strong>Temperature:</strong> {temperature}°C</p>
                <p><strong>pH:</strong> {pH}</p>
                <p><strong>Turbidity:</strong> {turbidity}</p>
                <p><strong>Quantity:</strong> {quantity} liters</p>
            </div>
        </div>
    )
}

export default CardTest
