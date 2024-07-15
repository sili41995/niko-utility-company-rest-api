const createHtmlMarkup = (content: string): string => `<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
${content}
  </body>
</html>
`;

export default createHtmlMarkup;
