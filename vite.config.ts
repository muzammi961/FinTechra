import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function adminApiPlugin() {
  return {
    name: 'admin-api-plugin',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url === '/api/content' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const dataPath = path.resolve(__dirname, 'src/data/content.json');
              JSON.parse(body); // Validate JSON
              fs.writeFileSync(dataPath, body, 'utf-8');
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), adminApiPlugin()],
});
