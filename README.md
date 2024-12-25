# Next.js 15 Hydration Mismatch Bug
This repository demonstrates a common hydration mismatch error in Next.js 15 applications when using dynamic data within client components.  The error occurs because the client-side rendered output differs from the server-side rendered output, leading to inconsistencies and a broken user interface.

## Bug Description
The core issue stems from the use of `Math.random()` within the `About` page.  Since `Math.random()` generates a different random number on the client and server, this creates a mismatch during hydration. Next.js attempts to reconcile the discrepancies in the DOM, resulting in an error. 

## Solution
The recommended approach is to ensure that the client-side data is consistent with the server-side data. This often involves fetching the data on the client-side, or moving the random generation to the server side, ensuring that the values match.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page. You should observe a hydration mismatch error in the console. 

## Contributing
Contributions are welcome!