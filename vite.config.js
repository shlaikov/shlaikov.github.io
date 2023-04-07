export default {
  plugins: [],
  server: {
    open: "./index.html",
    port: 3116,
  },
  build: {
    minify: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
}
