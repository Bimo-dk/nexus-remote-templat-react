import React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { PaymentBadge } from './components';

export function mount(el: HTMLElement): () => void {
  const root: Root = createRoot(el);
  root.render(<PaymentBadge />);
  return () => root.unmount();
}

export default PaymentBadge;
