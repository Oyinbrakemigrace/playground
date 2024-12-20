import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import PersonalDetailsForm from "../components/PersonalDetailsForm";
import OthersDetailsForm from "../components/OthersDetailsForm";

const Form = () => {
  const [pageNum, setPageNum] = useState(0);
  const formTitles = ["Sign up", "Personal details", "Other details"];
  const [formData, setFormData] = useState({
    emailAddress: "",
    promoCode: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    age: 0,
    stateOfOrigin: "",
    address: "",
  });

  const formToDisplay = () => {
    if (pageNum === 0) {
      return <SignUpForm formData={formData} setFormData={setFormData} />;
    } else if (pageNum === 1) {
      return (
        <PersonalDetailsForm formData={formData} setFormData={setFormData} />
      );
    } else {
      return (
        <OthersDetailsForm formData={formData} setFormData={setFormData} />
      );
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-400 to-black h-[600px] w-full flex justify-center items-center ">
      <div className="bg-blue-300 w-1/2 h-[500px] space-y-6 px-3">
        <h1 className="text-center font-bold mt-10 text-2xl">
          {formTitles[pageNum]}
        </h1>
        <div className="bg-slate-200 w-full h-1 m-auto">
          <div
            className={`bg-green-700 h-1 ${
              pageNum === 0 ? "w-[35%]" : pageNum === 1 ? "w-[66%]" : "w-full"
            }`}
          />
        </div>
        <div>{formToDisplay()}</div>
        <div className="space-x-4 flex justify-center items-center">
          <button
            disabled={pageNum === 0}
            onClick={() => setPageNum((prev) => prev - 1)}
            type="button"
            className={`px-3 py-1 rounded-md font-semibold ${
              pageNum === 0
                ? "bg-yellow-200 text-gray-400 cursor-not-allowed"
                : "bg-yellow-500"
            }`}
          >
            Prev
          </button>
          <button
            onClick={() => {
              pageNum === formTitles.length - 1
                ? alert("Form submitted")
                : setPageNum((prev) => prev + 1);
            }}
            type="button"
            className={`px-3 py-1 rounded-md font-semibold bg-green-500`}
          >
            {pageNum === formTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Form;
