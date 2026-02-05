import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// export default defineConfig(({ mode }) => ({
 
//   base: mode === "production" ? "/Hotel-managment/" : "./",

//   plugins: [
//     react({
//       babel: {
//         plugins: [['babel-plugin-react-compiler']],
//       },
//     }),
//     tailwindcss(),
//   ],
//   build: {
//     // set new warning limit (in kilobytes)
//     chunkSizeWarningLimit: 1000,
//   }
// }))
export default defineConfig(({ mode }) => ({
  base: "/",       
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
  },
}))
