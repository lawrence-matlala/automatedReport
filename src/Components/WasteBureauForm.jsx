import React, { useState } from "react";
import "./WasteBureauForm.css";

const WasteBureauForm = () => {
  /*Setting the Dealer Names Drop-down*/
  const [dealer, setDealer] = useState("");

  const dealers = [
    "Hlabirwa Motor Clinic",
    "Johaness Tyres",
    "Knowxwelle tyres",
    "Mamabheka Tyres",
    "Pbg Tyres Cc/Hi-Q Industrial",
    "Raul Heavy Mist Tyres & Projects (Pty) Ltd",
    "Ketlele Tyres",
    "SK Tyres",
    "The Tyre Rack Polokwane",
    "Turbo Tyre Polokwane",
    "Tyre Traders",
    "Tyre Station cc/Points",
    "Great North Transport-Giyani",
    "Lepelle-Nkumpi Local Municipality",
    "Tyre And Lubrication For Africa",
    "AMS SA (PTY) LTD Steelpoort",
    "Peter Tyres",
    "J.s. Poto Puncture Repair",
    "Point S (Thohoyandou)",
    "Survival Tyre Safety Steelpoort",
    "Supa Quick Tj Tyres Thohoyandou",
    "Mpho and Madimetja Welding Works and Projects",
    "Neonoba Trading Pty Ltd",
    "Nylstene",
    "Patty Motor Spares and Tyre Service",
    "Lekgomo Tyres",
    "Supa Quick Jane Furse",
    "Timoti Tyres Lebowakgomo",
    "Supa Quick Steelpoort",
    "Jane Furse Tyre Centre",
    "Hi Q Modimolle / RHR Quality Tyres",
    "Blackliontire and Services",
    "OSBRO (Thoho)",
    "OSBRO (Giyani)",
    "4 Way Tyre",
    "Bridgestone South Africa Commerical (PTY)Ltd Burgerfort",
    "On Point Tyres",
    "Hi-Q Giyani",
    "Malamulela Tyre Exhaust",
    "Supa Quick Giyani",
    "Supa Quick Burgersfort",
    "Kazi Tyres",
  ];

  /*It sets the dealer state to the selected option’s value (e.target.value). */
  const handleDealerChange = (e) => {
    setDealer(e.target.value);
  };

  /*--End--*/

  return (
    <div>
      <h1 className="headingForm">Waste Bureau Form</h1>
      {/*Creating the Form*/}
      <form>
        <div className="centered">
          {/* Add drop-down for Dealer Name here */}
          <label>
            Dealer Name:
            <select value={dealer} onChange={handleDealerChange}>
              <option value="" disabled>
                Select Dealer
              </option>
              {dealers.map((d, index) => (
                <option key={index} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </label>
          {/*--End--*/}
          <br />

          {/*Adding the Date and its input*/}
          <label className>
            Date:
            <input type="date" name="date" />
          </label>
          {/*--End--*/}
          <br />
        </div>
      </form>
    </div>
  );
};

export default WasteBureauForm;
