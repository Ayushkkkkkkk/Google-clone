"use client"

import React from 'react'
import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("Nepal");
  useEffect(() => {
    fetch(
      `http://ip-api.com/json/202.50.52.130`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);
  return <div>{country}</div>;
}