import React from "react";
import { Navigate } from "react-router-dom";

export const redirect = (path: string) => <Navigate to={path} replace={true} />;