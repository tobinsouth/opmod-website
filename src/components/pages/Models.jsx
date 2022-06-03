import React, { Fragment, useEffect, useState } from "react";

import { Link, useLocation, useNavigate, createSearchParams } from "react-router-dom";
import queryString from 'query-string';

export default function Models(){
  // Empty page
  return (
    <div>
      <h1>Models</h1>
      <p>This is the models page</p>
    </div>
  );
}