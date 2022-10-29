import React from 'react';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import SignUpForm from "./pages/SignUpForm/SignUpForm.tsx";

function App() {
const queryClient = new QueryClient()
  return (
   <QueryClientProvider client={queryClient}>
        <SignUpForm />
   </QueryClientProvider>
  );
}

export default App
