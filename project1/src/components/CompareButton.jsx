import { Navigate } from 'react-router-dom';
import React, { useState } from 'react'
import { Button } from 'bootstrap';

function CompareButton() {
  // Define a state variable to track whether or not the redirect should occur
  const [shouldRedirect, setShouldRedirect] = useState();

  // Define a function that will be called when the button is clicked
  const handleClick = () => {
    setShouldRedirect(true);
  };

  // If the `shouldRedirect` state variable is true, render the `Redirect` component
  if (shouldRedirect) {
    return <Navigate to="/new-page" />;
  }

  return (
    <div id='compareButton'>
        <Button onClick={handleClick} className='button'>
            Go to new page
        </Button>
    </div>
  );
}

export default CompareButton