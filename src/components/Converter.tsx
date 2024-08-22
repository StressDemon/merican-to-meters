import React, { useState } from "react";

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
];

const Converter: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<Unit>(units[0]);
  const [toUnit, setToUnit] = useState<Unit>(units[3]);

  const handleConversion = (): number => {
    if (fromUnit.name === toUnit.name) {
      return inputValue;
    }
    const valueInMeters = inputValue * fromUnit.sizeInMeters;
    return valueInMeters / toUnit.sizeInMeters;
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(parseFloat(e.target.value))}
        />
        <select
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
      </div>

      <div>
        <select
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
  );
};

export default Converter;
