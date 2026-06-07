import React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { OrderSummary } from './components';

export function mount(el: HTMLElement): () => void {
  const root: Root = createRoot(el);
  root.render(<OrderSummary />);
  return () => root.unmount();
}

export default OrderSummary;
