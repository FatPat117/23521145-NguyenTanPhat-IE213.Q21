import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { transformSync } from "esbuild";

/**
 * Vite không parse JSX trong file .js.
 * Dùng esbuild transformSync (loader jsx) cho file .js trong src/ trước khi Vite phân tích import.
 */
function jsxInSrcJs() {
  return {
    name: "jsx-in-src-js",
    enforce: "pre",
    transform(code, id) {
      const normalized = id.replace(/\\/g, "/");
      if (!normalized.includes("/src/")) return null;
      if (!normalized.endsWith(".js")) return null;
      const result = transformSync(code, {
        loader: "jsx",
        jsx: "automatic",
      });
      return { code: result.code };
    },
  };
}

export default defineConfig({
  plugins: [jsxInSrcJs(), react()],
});
