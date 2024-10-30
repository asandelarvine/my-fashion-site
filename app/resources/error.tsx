// error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void; }) {
  useEffect(() => {
    console.error("Error:", error); // Log detailed error info
  }, [error]);

  return (
    <div className="text-center">
      <h2 className="text-red-500">Something went wrong!</h2>
      <button onClick={() => reset()} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Try again
      </button>
    </div>
  );
}
