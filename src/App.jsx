//import WasteBureauForm from "./Components/WasteBureauForm";
import "./App.css";
import { useState } from "react";

function App() {
  // Labels for your numeric inputs
  const numericFields = [
    "Passenger",
    "Light Commercial",
    "4x4",
    "Heavy Commercial",
    "Agriculture",
    "Motor Cycle",
    "Industrial and Solid",
    "Aircraft",
    "OTR",
    "Other Pneumatic",
  ];
  //End

  //Stores current numeric values
  // State to store all numeric input values (default 0)
  const [formValues, setFormValues] = useState(
    numericFields.reduce((acc, label) => {
      acc[label] = 0;
      return acc;
    }, {})
  );
  //End

  /*This code defines a function handleFocus that runs when 
  an input field gets focused (clicked or tabbed into).
Purpose:
It checks if the input's current value is "0" (the default).
If yes, it clears the input's value by setting it to an 
empty string "".*/
  const handleFocus = (e) => {
    if (e.target.value === "0") {
      e.target.value = "";
    }
  };
  //End

  /*This code defines a function handleBlur that runs when an 
  input field loses focus (when the user clicks or tabs 
  away from the input).
Purpose:
It gets the input’s current value and trims any extra spaces.
If the input is empty (user didn’t enter anything), i
t sets the value back to 0 (the default).
If there is a value, it converts it to a number.
It then updates the state (formValues) to save this 
number for the specific input (label identifies which input).*/
  const handleBlur = (label, e) => {
    const value = e.target.value.trim();
    const newValue = value === "" ? 0 : Number(value);
    setFormValues((prev) => ({ ...prev, [label]: newValue }));
  };
  //End

  //
  // Calculating the total of all inputs
  const total = Object.values(formValues).reduce(
    (acc, curr) => acc + Number(curr),
    0
  );
  //End

  return (
    <div className="container">
      <h1>Waste Bureau Form</h1>

      {/*Creating the form*/}
      <form>
        <label htmlFor="dealername">Dealer Name*</label>
        {/*Code for the drop-down of Dealer Names*/}
        <select id="dealername" name="dealername" required>
          <option value="">Select Dealer</option>
          <option value="Hlabirwa Motor Clinic">Hlabirwa Motor Clinic</option>
          <option value="Johaness Tyres">Johaness Tyres</option>
          <option value="Knowxwelle tyres">Knowxwelle tyres</option>
          <option value="Mamabheka Tyres">Mamabheka Tyres</option>
          <option value="Pbg Tyres Cc/Hi-Q Industrial">
            Pbg Tyres Cc/Hi-Q Industrial
          </option>
          <option value="Raul Heavy Mist Tyres & Projects (Pty) Ltd">
            Raul Heavy Mist Tyres & Projects (Pty) Ltd
          </option>
          <option value="Ketlele Tyres">Ketlele Tyres</option>
          <option value="SK Tyres">SK Tyres</option>
          <option value="The Tyre Rack Polokwane">
            The Tyre Rack Polokwane
          </option>
          <option value="Turbo Tyre Polokwane">Turbo Tyre Polokwane</option>
          <option value="Tyre Traders">Tyre Traders</option>
          <option value="Tyre Station cc/Points">Tyre Station cc/Points</option>
          <option value="Great North Transport-Giyani">
            Great North Transport-Giyani
          </option>
          <option value="Lepelle-Nkumpi Local Municipality">
            Lepelle-Nkumpi Local Municipality
          </option>
          <option value="Tyre And Lubrication For Africa">
            Tyre And Lubrication For Africa
          </option>
          <option value="AMS SA (PTY) LTD Steelpoort">
            AMS SA (PTY) LTD Steelpoort
          </option>
          <option value="Peter Tyres">Peter Tyres</option>
          <option value="J.s. Poto Puncture Repair">
            J.s. Poto Puncture Repair
          </option>
          <option value="Point S (Thohoyandou)">Point S (Thohoyandou)</option>
          <option value="Survival Tyre Safety Steelpoort">
            Survival Tyre Safety Steelpoort
          </option>
          <option value="Supa Quick Tj Tyres Thohoyandou">
            Supa Quick Tj Tyres Thohoyandou
          </option>
          <option value="Mpho and Madimetja Welding Works and Projects">
            Mpho and Madimetja Welding Works and Projects
          </option>
          <option value="Neonoba Trading Pty Ltd">
            Neonoba Trading Pty Ltd
          </option>
          <option value="Nylstene">Nylstene</option>
          <option value="Patty Motor Spares and Tyre Service">
            Patty Motor Spares and Tyre Service
          </option>
          <option value="Lekgomo Tyres">Lekgomo Tyres</option>
          <option value="Supa Quick Jane Furse">Supa Quick Jane Furse</option>
          <option value="Timoti Tyres Lebowakgomo">
            Timoti Tyres Lebowakgomo
          </option>
          <option value="Supa Quick Steelpoort">Supa Quick Steelpoort</option>
          <option value="Jane Furse Tyre Centre">Jane Furse Tyre Centre</option>
          <option value="Hi Q Modimolle / RHR Quality Tyres">
            Hi Q Modimolle / RHR Quality Tyres
          </option>
          <option value="Blackliontire and Services">
            Blackliontire and Services
          </option>
          <option value="OSBRO (Thoho)">OSBRO (Thoho)</option>
          <option value="OSBRO (Giyani)">OSBRO (Giyani)</option>
          <option value="4 Way Tyre">4 Way Tyre</option>
          <option value="Bridgestone South Africa Commerical (PTY)Ltd Burgerfort">
            Bridgestone South Africa Commerical (PTY)Ltd Burgerfort
          </option>
          <option value="On Point Tyres">On Point Tyres</option>
          <option value="Hi-Q Giyani">Hi-Q Giyani</option>
          <option value="Malamulela Tyre Exhaust">
            Malamulela Tyre Exhaust
          </option>
          <option value="Supa Quick Giyani">Supa Quick Giyani</option>
          <option value="Supa Quick Burgersfort">Supa Quick Burgersfort</option>
          <option value="Kazi Tyres">Kazi Tyres</option>
        </select>

        <label htmlFor="manager">Manager Name*</label>
        <input
          type="text"
          placeholder="Enter Manager's Name"
          name="manager"
          id="manager"
          required
        />

        <label htmlFor="dealerphone">Dealer's Phone Number*</label>
        <input
          type="text"
          placeholder="Enter Dealer's Phone Number*"
          name="dealerphone"
          id="dealerphone"
          required
        />

        {/*Creating a drop-down for all the Cities in South Africa */}
        <label htmlFor="cities">City*</label>
        <select id="cities" name="cities" required>
          <option value="">Select City</option>
          <option value="Johannesburg">Johannesburg</option>
          <option value="Cape Town">Cape Town</option>
          <option value="Durban">Durban</option>
          <option value="Pretoria">Pretoria</option>
          <option value="Port Elizabeth">Port Elizabeth</option>
          <option value="Bloemfontein">Bloemfontein</option>
          <option value="East London">East London</option>
          <option value="Polokwane">Polokwane</option>
          <option value="Pietermaritzburg">Pietermaritzburg</option>
          <option value="Kimberley">Kimberley</option>
          <option value="Nelspruit">Nelspruit</option>
          <option value="Rustenburg">Rustenburg</option>
          <option value="George">George</option>
          <option value="Welkom">Welkom</option>
          <option value="Vereeniging">Vereeniging</option>
        </select>

        <label htmlFor="date">Date*</label>
        <input type="date" required />

        <label htmlFor="deliver">Delivery Number*</label>
        <input
          type="text"
          placeholder="Enter Delivery Number"
          name="deliver"
          id="deliver"
        />

        <label htmlFor="sub">SUB ID*</label>
        <input
          type="text"
          placeholder="Enter SUB ID"
          name="sub"
          id="sub"
          required
        />

        <label htmlFor="contact">Contact*</label>
        <input
          type="text"
          placeholder="Enter Phone Number*"
          name="contact"
          id="contact"
          required
        />

        <label htmlFor="transporter">Transporter*</label>
        <input
          type="text"
          placeholder="Enter Transporter's Name*"
          name="transporter"
          id="transporter"
          required
        />

        <label htmlFor="location">Location*</label>
        <input
          type="text"
          placeholder="Enter Location Name*"
          name="location"
          id="location"
          required
        />

        <label htmlFor="vehicle">Vehicle Registration*</label>
        <input
          type="text"
          placeholder="Enter Vehicle Registration*"
          name="vehicle"
          id="vehicle"
          required
        />

        {/* 
It renders a list of number inputs for each tyre category, 
each showing a default value from state, clearing zero on focus, 
resetting to zero if left empty on blur, and updating 
state as the user types.*/}
        <h3>Tyre Categories</h3>
        {numericFields.map((label) => (
          <div key={label}>
            <label>{label}</label>
            <input
              type="number"
              value={formValues[label]}
              onFocus={handleFocus}
              onBlur={(e) => handleBlur(label, e)}
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  [label]: e.target.value,
                }))
              }
              min="0"
            />
          </div>
        ))}
        {/*End*/}

        {/*Displaying the total sum of inputs*/}
        <div style={{ marginTop: "10px", fontWeight: "bold" }}>
          Total: {total}
        </div>
        {/*End*/}

        {/*Adding a submit button*/}
        <button type="submit">Submit</button>
      </form>

      {/*--End--*/}
    </div>
  );
}

export default App;
