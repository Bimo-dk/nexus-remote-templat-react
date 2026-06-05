import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nexusVite } from '@bimo-dk/nexus-build/vite';

export default defineConfig({
  plugins: [
    react(),
    nexusVite({
      name: process.env['NEXUS_REMOTE_NAME'] ?? '__REMOTE_NAME__',
      exposes: { RemoteEntry: './src/entry.tsx' },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        RemoteEntry: './src/entry.tsx',
      },
    },
  },
});
