import "./PhoneInput.css";
import React, { useState } from "react";

function PhoneInput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // оставляем только цифры

    if (input.startsWith("7")) {
      input = input.substring(1); // убираем первую "7", так как у нас уже есть +7
    }

    let formatted = "+7 (";
    if (input.length > 0) formatted += input.substring(0, 3);
    if (input.length >= 3) formatted += ") " + input.substring(3, 6);
    if (input.length >= 6) formatted += "-" + input.substring(6, 8);
    if (input.length >= 8) formatted += "-" + input.substring(8, 10);

    setValue(formatted);
  };

  return (
    <div className="phone-input-wrapper">
      <label className="phone-label">Ваш номер телефона</label>
      <input
        type="tel"
        value={value}
        onChange={handleChange}
        maxLength={18}
        placeholder="+7 (___) ___-__-__"
        className="phone-input"
      />
    </div>
  );
}

export default PhoneInput;