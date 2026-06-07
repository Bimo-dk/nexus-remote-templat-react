import React, { useState } from 'react';

const REMOTE_NAME = '__REMOTE_NAME__';

export function CheckoutForm(): React.ReactElement {
  const [step, setStep] = useState(1);
  return (
    <form
      style={{
        border: '1px solid #fecaca',
        borderRadius: 12,
        padding: 16,
        background: '#fef2f2',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 style={{ margin: '0 0 8px', color: '#991b1b' }}>{REMOTE_NAME}: CheckoutForm</h3>
      <p style={{ margin: '0 0 12px', color: '#7f1d1d', fontSize: 13 }}>
        A React checkout form with stepper navigation (step {step} of 3).
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        {[1, 2, 3].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStep(s)}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: 0,
              cursor: 'pointer',
              background: step === s ? '#dc2626' : '#fca5a5',
              color: '#fff',
            }}
          >
            Step {s}
          </button>
        ))}
      </div>
    </form>
  );
}

export function PaymentBadge(): React.ReactElement {
  const [method, setMethod] = useState<'card' | 'paypal' | 'apple'>('card');
  const labels: Record<typeof method, string> = { card: '💳 Card', paypal: 'PP PayPal', apple:  'Apple Pay' };
  return (
    <div
      style={{
        border: '1px solid #bae6fd',
        borderRadius: 12,
        padding: 16,
        background: '#f0f9ff',
      }}
    >
      <h3 style={{ margin: '0 0 8px', color: '#075985' }}>{REMOTE_NAME}: PaymentBadge</h3>
      <p style={{ margin: '0 0 12px', color: '#0c4a6e', fontSize: 13 }}>
        A React payment method selector.
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        {(['card', 'paypal', 'apple'] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMethod(m)}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: 0,
              cursor: 'pointer',
              background: method === m ? '#0284c7' : '#7dd3fc',
              color: '#fff',
            }}
          >
            {labels[m]}
          </button>
        ))}
      </div>
    </div>
  );
}

export function OrderSummary(): React.ReactElement {
  const [items] = useState([
    { name: 'Vue T-Shirt', price: 29 },
    { name: 'React Mug',   price: 12 },
    { name: 'Angular Cap', price: 18 },
  ]);
  const total = items.reduce((s, i) => s + i.price, 0);
  return (
    <div
      style={{
        border: '1px solid #e9d5ff',
        borderRadius: 12,
        padding: 16,
        background: '#faf5ff',
      }}
    >
      <h3 style={{ margin: '0 0 8px', color: '#6b21a8' }}>{REMOTE_NAME}: OrderSummary</h3>
      <p style={{ margin: '0 0 12px', color: '#581c87', fontSize: 13 }}>A React order summary.</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((i) => (
          <li key={i.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', color: '#581c87' }}>
            <span>{i.name}</span>
            <strong>$ {i.price.toFixed(2)}</strong>
          </li>
        ))}
        <li style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0 0', borderTop: '1px solid #d8b4fe', marginTop: 8, color: '#581c87' }}>
          <span>Total</span>
          <strong>$ {total.toFixed(2)}</strong>
        </li>
      </ul>
    </div>
  );
}
