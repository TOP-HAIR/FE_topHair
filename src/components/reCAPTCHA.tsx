import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ReCAPTCHAComponent() {
  function onChange(value: string | null) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <div className="h-full w-full">
        <ReCAPTCHA
          sitekey="6LeJiRApAAAAAJggQH1VQaPhk38_418L_pajXGtb"
          onChange={onChange}
        />
      </div>
    </>
  );
}
