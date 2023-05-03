import { useState, useEffect } from 'react';

export default function ApiTest() {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {
    fetch('http://your-api-domain.com/api')
      .then(response => response.text())
      .then(data => {
        setApiResponse(data);
      });
  }, []);

  return (
    <div>
      <h1>API Test</h1>
      <p>API response: {apiResponse}</p>
    </div>
  );
}
