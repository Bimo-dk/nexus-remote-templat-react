import React, { useState } from 'react';

export default function RemoteEntry(): React.ReactElement {
  const [count, setCount] = useState(0);

  return (
    <section style={{ background: 'white', border: '2px solid #6366f1', borderRadius: 12, padding: 24, boxShadow: '0 4px 12px rgba(99, 102, 241, 0.08)' }}>
      <h2 style={{ margin: '0 0 16px', color: '#4338ca' }}>__REMOTE_NAME__ entry component</h2>
      <p>You can safely delete all boilerplate in this file — it is your remote&apos;s primary entry. It is exposed as <code>./RemoteEntry</code> and loaded dynamically by the host.</p>
      <p>Route: <code>/__REMOTE_ROUTE__</code></p>
      <p>
        Counter: <strong>{count}</strong>
        <button type="button" style={{ marginLeft: 8 }} onClick={() => setCount((n) => n + 1)}>+1</button>
      </p>
    </section>
  );
}
