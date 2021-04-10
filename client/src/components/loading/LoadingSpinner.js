import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";

const LoadingSpinner = () => {
  return (
    <Container align='center' justify='center'>
      <CircularProgress size={70} thickness={4} value={100} />
    </Container>
  );
};

export default LoadingSpinner;
