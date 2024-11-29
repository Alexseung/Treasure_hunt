/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}', // App Router 사용 시
    './components/**/*.{js,jsx,ts,tsx}', // 컴포넌트 폴더 경로
    './styles/**/*.{css,scss}', // 스타일 파일
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
