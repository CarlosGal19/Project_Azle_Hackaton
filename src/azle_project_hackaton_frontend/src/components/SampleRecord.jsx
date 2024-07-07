const SampleRecord = ({data}) => {

    const { id, dateTime, tds, temperature, pH, turbidity, quantity } = data;

    return (
        <div key={id} className="bg-white p-6 rounded-lg shadow-lg border border-blue-500 mb-4">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Test Record</h2>
            <div className="text-gray-700">
                <p><strong>Date and Time:</strong> {dateTime}</p>
                <p><strong>TDS:</strong> {tds}</p>
                <p><strong>Temperature:</strong> {temperature}</p>
                <p><strong>pH:</strong> {pH}</p>
                <p><strong>Turbidity:</strong> {turbidity}</p>
                <p><strong>Quantity:</strong> {quantity}</p>
            </div>
        </div>
    )
}

export default SampleRecord
