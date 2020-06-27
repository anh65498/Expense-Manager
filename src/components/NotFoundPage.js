import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div>
      <h1> The page you're looking for is not available</h1>
      <Link to="/">Back to Homepage</Link>
    </div>
)

export default NotFoundPage;