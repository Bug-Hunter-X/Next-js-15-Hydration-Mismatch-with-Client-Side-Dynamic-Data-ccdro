```javascript
// pages/about.js
import { useEffect, useState } from 'react';

export default function About() {
  const [dynamicData, setDynamicData] = useState(null);

  useEffect(() => {
    // Fetch data from an API or generate data client-side (if it doesn't need to be consistent across renders)
    const data = Math.random(); // Or fetch from API
    setDynamicData(data);
  }, []);

  if (dynamicData === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Some dynamic data: {dynamicData}</p>
    </div>
  );
}
```