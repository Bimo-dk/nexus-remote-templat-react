// Federation entry — "Bring Your Own Framework" pattern.
//
// Instead of exposing a React function component (which forces the host
// to use the same React instance, otherwise `useState` throws), we
// expose a plain
//   mount(el: HTMLElement): () => void
// function. The remote brings its own React + react-dom, creates its
// own root on the element the host hands it, and returns a teardown
// function the host calls when the user navigates away.
//
// This sidesteps every cross-framework runtime mismatch (B-27): the
// host can be Angular, Vue or vanilla and never needs the same React
// version as the remote.

import React, { useState } from 'react';
import { createRoot, type Root } from 'react-dom/client';

const REMOTE_NAME = '__REMOTE_NAME__';

function RemoteEntry(): React.ReactElement {
  const [count, setCount] = useState(0);
  return (
    <section
      style={{
        background: 'white',
        border: '2px solid #6366f1',
        borderRadius: 12,
        padding: 24,
        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.08)',
      }}
    >
      <h2 style={{ margin: '0 0 16px', color: '#4338ca' }}>
        {REMOTE_NAME} entry component
      </h2>
      <p>
        This is the federated entry of the &quot;{REMOTE_NAME}&quot; React remote — replace it with your own component.
      </p>
      <p>
        Counter: <strong>{count}</strong>
        <button type="button" style={{ marginLeft: 8 }} onClick={() => setCount((n) => n + 1)}>+1</button>
      </p>
    </section>
  );
}

export function mount(el: HTMLElement): () => void {
  const root: Root = createRoot(el);
  root.render(<RemoteEntry />);
  return () => root.unmount();
}

// Keep the legacy function-component default export for older host
// runtimes that load via React's own reconciler.
export default RemoteEntry;
