import pug from '@vituum/vite-plugin-pug'

export default {
  plugins: [pug()],
  build: {
    rollupOptions: {
      input: ['index.pug.html']
    }
  }
}
