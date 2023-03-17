// pages/ssr.js
export default function SSR({ formattedDate }) {
  return (
    <>
      <h1>Server-side rendered page</h1>
      <p>
        This page is server-side rendered. It was rendered on.
      </p>
      <p>
        <a href="/">View a static page.</a>
      </p>
    </>
  );
}
