// // src/utils/theme.ts
// export const savedTheme = () => {
//   if (typeof window !== 'undefined') {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       document.documentElement.classList.toggle('dark', savedTheme === 'dark');

//     } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       document.documentElement.classList.add('dark');
//     }
//   }
// };
