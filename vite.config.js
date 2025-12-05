import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        allowedHosts: [
            'ec2-3-35-21-98.ap-northeast-2.compute.amazonaws.com',
        ],
        port: 5173,
        proxy: {
            "/api": {
                target: "http://localhost:8787",
                changeOrigin: true
            }
        }
    }
});
