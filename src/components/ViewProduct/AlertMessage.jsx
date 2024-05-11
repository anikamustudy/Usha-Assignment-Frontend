import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const AlertMessage = ({ variant, message }) => {
  const [show, setShow] = useState(true);

  return (
    <Alert
      variant={variant}
      onClose={() => setShow(false)}
      dismissible
      show={show}
    >
      {message}
    </Alert>
  );
};

export default AlertMessage;
