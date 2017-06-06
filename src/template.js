export default (data) => {
  const { body, title } = data
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>

      <body>
        <h1>Welcome to the express app shizz</h1>
        <div id="root">${body}</div>
        <script>
          window.__APP_INITIAL_STATE__ = ${JSON.stringify(data).replace(/</g, '\\u003c')}
        </script>
      </body>

      <script src="/assets/bundle.js"></script>
    </html>
  `;
};
