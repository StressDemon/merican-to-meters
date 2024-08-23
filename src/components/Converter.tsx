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
  { name: "Eastern Grey Kangaroo", sizeInMeters: 2 },
  { name: "Minecraft Llama Spit", sizeInMeters: 0.25 },
  { name: "Bee Sting", sizeInMeters: 0.00255 },
  { name: "Snevira", sizeInMeters: 0.5 },
  { name: "BeardsofFuryGaming", sizeInMeters: 1.8796000000000002 },
  { name: "MagiksWorld", sizeInMeters: 0.1 },
  { name: "AR-15", sizeInMeters: 0.22225 },
  { name: "American Flag", sizeInMeters: 1.524 },
  { name: "Large KFC Wings Bucket", sizeInMeters: 0.254 },
];

const sortedUnits = units.sort((a, b) => a.name.localeCompare(b.name));

const Converter: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(0);

  const [fromUnit, setFromUnit] = useState<Unit>(
    sortedUnits.find((unit) => unit.name === "Meters")!
  );
  const [toUnit, setToUnit] = useState<Unit>(
    sortedUnits.find((unit) => unit.name === "Bald Eagles")!
  );

  const handleConversion = (): number => {
    if (fromUnit.name === toUnit.name) {
      return inputValue;
    }
    const valueInMeters = inputValue * fromUnit.sizeInMeters;
    return valueInMeters / toUnit.sizeInMeters;
  };

  return (
    <div className="converter-container">
      <div className="input-holder">
        <select
          className="from-unit units"
          value={fromUnit.name}
          onChange={(e) =>
            setFromUnit(
              sortedUnits.find((unit) => unit.name === e.target.value)!
            )
          }
        >
          {sortedUnits.map((unit) => (
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
            setToUnit(sortedUnits.find((unit) => unit.name === e.target.value)!)
          }
        >
          {sortedUnits.map((unit) => (
            <option key={unit.name} value={unit.name}>
              {unit.name}
            </option>
          ))}
        </select>
      </div>

      <p>
        Converted Value: {handleConversion()} {toUnit.name}
      </p>
    </div>
  );
};

export default Converter;
