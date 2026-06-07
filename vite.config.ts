import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nexusVite } from '@bimo-dk/nexus-build/vite';

const remoteName = process.env['NEXUS_REMOTE_NAME'] ?? '__REMOTE_NAME__';

export default defineConfig({
  plugins: [
    react(),
    nexusVite({
      name: remoteName,
      exposes: {
        RemoteEntry:   './src/entry.tsx',
        CheckoutForm:  './src/entry-checkout-form.tsx',
        PaymentBadge:  './src/entry-payment-badge.tsx',
        OrderSummary:  './src/entry-order-summary.tsx',
      },
      catalog: [
        {
          expose: './RemoteEntry',
          title: `${remoteName} entry`,
          description: 'Boilerplate demo component shipped with the React remote template.',
          category: 'demo',
          tags: ['demo', 'starter'],
        },
        {
          expose: './CheckoutForm',
          title: `${remoteName} CheckoutForm`,
          description: 'A React checkout form with stepper navigation.',
          category: 'commerce',
          tags: ['react', 'checkout', 'form'],
        },
        {
          expose: './PaymentBadge',
          title: `${remoteName} PaymentBadge`,
          description: 'A React payment method selector (card / PayPal / Apple Pay).',
          category: 'commerce',
          tags: ['react', 'payment', 'badge'],
        },
        {
          expose: './OrderSummary',
          title: `${remoteName} OrderSummary`,
          description: 'A React order summary with itemised total.',
          category: 'commerce',
          tags: ['react', 'order', 'summary'],
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index:         './index.html',
        RemoteEntry:   './src/entry.tsx',
        CheckoutForm:  './src/entry-checkout-form.tsx',
        PaymentBadge:  './src/entry-payment-badge.tsx',
        OrderSummary:  './src/entry-order-summary.tsx',
      },
      // Federation entries are loaded dynamically from the host — Rollup
      // can't see the importer and would tree-shake the chunk without
      // this. 'strict' preserves the entry signature exactly. See B-26.
      preserveEntrySignatures: 'strict',
    },
  },
});
