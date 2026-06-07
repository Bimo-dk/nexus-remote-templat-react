import React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { CheckoutForm } from './components';

export function mount(el: HTMLElement): () => void {
  const root: Root = createRoot(el);
  root.render(<CheckoutForm />);
  return () => root.unmount();
}

export default CheckoutForm;
