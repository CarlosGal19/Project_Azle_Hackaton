const InfoCard = ({ data }) => {
    const { title, pHLevels, tds, ntu, description } = data;

    return (
        <div className="bg-emerald-100 p-8 rounded-lg shadow-lg border border-blue-500 mb-8 w-full md:w-3/4 lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">{title}</h2>
            <div className="text-gray-700 text-xl">
                <p><strong>pH Levels:</strong> {pHLevels}</p>
                <p><strong>TDS:</strong> {tds}</p>
                <p><strong>NTU:</strong> {ntu}</p>
                <p><strong>Description and Use:</strong> {description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
