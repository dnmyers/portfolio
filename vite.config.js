// vite.config.js
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'node:url';
import path from "path";
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Resolve aliases from this config's location, independent of the command's working directory.
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "./src/components"),
			"@app": path.resolve(__dirname, "./src/app"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@config": path.resolve(__dirname, "./src/config"),
			"@": path.resolve(__dirname, "./src")
		}
	}
});
