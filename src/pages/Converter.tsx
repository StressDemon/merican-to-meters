import React, { useState } from "react";
import "./Converter.css";

interface Unit {
  name: string;
  sizeInMeters: number;
}

const units: Unit[] = [
  { name: "Meters", sizeInMeters: 1 },
  { name: "Kilometers", sizeInMeters: 1000 },
  { name: "Centimeters", sizeInMeters: 0.01 },
  { name: "Elephants", sizeInMeters: 6 },
  { name: "Fishing Rods", sizeInMeters: 1.524 },
  { name: "Bald Eagles", sizeInMeters: 1.016 },
  { name: "Donald Trump", sizeInMeters: 1.9050000000000005 },
  { name: "Football Fields", sizeInMeters: 91.44 },
  { name: "Twinkies", sizeInMeters: 0.1 },
  { name: "Double-Decker Buses", sizeInMeters: 4.38 },
  { name: "Beard-Seconds", sizeInMeters: 5.08e-6 },
  { name: "Statues of Liberty", sizeInMeters: 93 },
  { name: "Jumbo Jets", sizeInMeters: 70.66 },
  { name: "Toilet Paper Rolls", sizeInMeters: 0.1143 },
  { name: "Walmart Aisles", sizeInMeters: 30.48 },
  { name: "Boogers", sizeInMeters: 0.0025 },
  { name: "Pickle Jars", sizeInMeters: 0.2032 },
  { name: "Cheeseburgers", sizeInMeters: 0.1 },
  { name: "Hot Dogs", sizeInMeters: 0.1524 },
  { name: "Corn Dogs", sizeInMeters: 0.2032 },
  { name: "Red Solo Cups", sizeInMeters: 0.117 },
  { name: "T-Rexes", sizeInMeters: 12 },
  { name: "Mile Markers", sizeInMeters: 1609.34 },
  { name: "Skyscrapers", sizeInMeters: 300 },
  { name: "Pancakes", sizeInMeters: 0.0127 },
  { name: "Hog Dogs", sizeInMeters: 1.524 },
  { name: "Horses", sizeInMeters: 1.524 },
];

const Converter: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<Unit>(units[0]);
  const [toUnit, setToUnit] = useState<Unit>(units[5]);

  const handleConversion = (): number => {
    if (fromUnit.name === toUnit.name) {
      return inputValue;
    }
    const valueInMeters = inputValue * fromUnit.sizeInMeters;
    return valueInMeters / toUnit.sizeInMeters;
  };

  return (
    <div className="converter-container">
      <div className="banner"></div>
      <div className="converter-tool">
        <div className="guns"></div>
        <div className="input-holder">
          <select
            className="from-unit units"
            value={fromUnit.name}
            onChange={(e) =>
              setFromUnit(units.find((unit) => unit.name === e.target.value)!)
            }
          >
            {units.map((unit) => (
              <option key={unit.name} value={unit.name}>
                {unit.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(parseFloat(e.target.value))}
          />
          <select
            className="units"
            value={toUnit.name}
            onChange={(e) =>
              setToUnit(units.find((unit) => unit.name === e.target.value)!)
            }
          >
            {units.map((unit) => (
              <option key={unit.name} value={unit.name}>
                {unit.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p>
            Converted Value: {handleConversion()} {toUnit.name}
          </p>
        </div>
      </div>
      <div className="eagle"></div>
      <div className="army-man"></div>
    </div>
  );
};

export default Converter;
