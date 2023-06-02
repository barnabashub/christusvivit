import { useState, useEffect } from 'react';
import { Radio, Text, Spacer } from "@nextui-org/react";

export default function ApiTest() {
  const [apiResponse, setApiResponse] = useState('');
  var name = "BarnabasHub";
  useEffect(() => {
    fetch('https://barnabashub.pythonanywhere.com/api?name=BarnabasHub')
      .then(response => response.text())
      .then(data => {
        setApiResponse(data);
      });
  }, []);
  
    const [checked, setChecked] = React.useState('');

  return (
    <div>
      <h1>API Test</h1>
      <p>API response: {apiResponse}</p>
<h3>asd</h3>
    </div>

    <>
      <Radio.Group 
        label="Options"
        value={checked}
        onChange={setChecked}
      >
        <Radio value="A">Option A</Radio>
        <Radio value="B">Option B</Radio>
        <Radio value="C">Option C</Radio>
        <Radio value="D">Option D</Radio>
      </Radio.Group>
      <Spacer y={1} />
      <Text>You've checked: {checked}</Text>
    </>
  );
}
