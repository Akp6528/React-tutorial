import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState('default user')



  if (loading) {
    return <div>
      <h1>Loading....</h1>
    </div>
  }


  return (
    <>



    </>
  )
};

export default MultipleReturns;
