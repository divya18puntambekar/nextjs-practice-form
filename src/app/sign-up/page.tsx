"use client"
import React, { useState } from "react";
import axios from "axios";

export default function Page() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    contact: "",
    gender: "",
    password: "",
    confirm_password: ""
  });

  const handleInput = (event: any) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
  
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = axios.post("/api/signup", formData)
      console.log(response);
      console.log("data saved in db");
    }catch(error) {
      console.log(error);
    }
    
  }
  return ( 
    
    <form onSubmit={submitHandler}>
      <div className="space-y-12 signUpForm">
        <h1 className="text-3xl font-bold text-center underline">SignUp Form</h1>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fname"
                  id="first-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInput} value={formData.fname}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lname"
                  id="last-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInput} value={formData.lname}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInput} value={formData.email}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                Contact
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInput} value={formData.contact}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInput} value={formData.username}
                /> 
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <div className="flex">
                    <div className="flex items-center me-4">
                        <input id="female" type="radio" value="Female" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleInput} checked={formData.gender === 'Female'}/>
                        <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                    </div>
                    <div className="flex items-center me-4">
                        <input id="male" type="radio" value="Male" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleInput} checked={formData.gender === 'Male'}/>
                        <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                    </div>

                </div>

              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInput} value={formData.password}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInput} value={formData.confirm_password}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
