const waterQualityData = [
    {
        title: "Potable Water",
        pHLevels: "6.5 - 7.0",
        tds: "0-300 mg/L (Excellent), 300-600 mg/L (Good), 600-900 mg/L (Fair)",
        ntu: "1-5 (Excellent), should not exceed 5 NTU for human consumption",
        description: "Water suitable for human and animal consumption is safe to drink and use for food preparation without causing health issues."
    },
    {
        title: "Grey Water / Irrigation Water",
        pHLevels: "6.5 - 8.5",
        tds: "200 - 1,200 mg/L",
        ntu: "10-100",
        description: "Mainly used for agricultural irrigation, providing favorable results for crops, better nutrient absorption, biomass production, and advancing harvest levels. Also used for irrigation in fields and more."
    },
    {
        title: "Waste Water",
        pHLevels: "6.0 - 9.0",
        tds: "200 - 3,000 mg/L",
        ntu: "100 - 500",
        description: "Used for irrigation of parks and public fields. Can also be used to maintain environmental flow, with treatment byproducts generating energy and nutrients."
    },
    {
        title: "Black Water",
        pHLevels: "7.5 - 10.0",
        tds: "1,000 - 4,000 mg/L",
        ntu: "500 - 2,000",
        description: "Contains high levels of contaminants and requires extensive treatment. Typically used in systems for generating energy and recovering nutrients."
    }
];

export default waterQualityData;
