import { ValidRecaptchaType } from "@/shared/entity/authEntity";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ReCAPTCHAComponent({
  updateValidRecaptcha,
}: ValidRecaptchaType) {
  function onChange(value: string | null) {
    if (value != "" && value != null) {
      updateValidRecaptcha(true);
    }
  }
  return (
    <>
      <div className="my-8 w-full h-full flex justify-center items-center">
        <ReCAPTCHA
          sitekey="6LeJiRApAAAAAJggQH1VQaPhk38_418L_pajXGtb"
          onChange={onChange}
        />
      </div>
    </>
  );
}
