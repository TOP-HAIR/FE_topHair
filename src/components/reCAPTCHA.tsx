import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ReCAPTCHAComponent() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <ReCAPTCHA
        sitekey="6LeJiRApAAAAAJggQH1VQaPhk38_418L_pajXGtb"
        onChange={onChange}
      />
    </>
  );
}
