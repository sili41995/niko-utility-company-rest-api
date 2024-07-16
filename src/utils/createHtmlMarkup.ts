const createHtmlMarkup = (content: string): string => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
     <style>
      @page {
        size: A4;
        margin: 20mm;
      }
      * {
        box-sizing: border-box;
        margin: 0;
        font-family: sans-serif;
      }
      table {
        border-collapse: collapse;
      }
      .container {
        width: 790px;
      }
      .container:not(:first-of-type) {
        margin-top: 12px;
      }
      .container:nth-child(6n) {
        page-break-before: always;
      }
      .section {
        padding: 2px;
        border: 1px solid #2a2a2a;
      }
      .section.info {
        width: 30%;
      }
      .section > *:not(:first-child) {
        margin-top: 1px;
      }
      .section-item > *:not(:first-child) {
        margin-top: 1px;
      }
      .subscriber-account-table-cell {
        padding-top: 2px;
        padding-bottom: 2px;
      }
      .invoice-table-cell {
        padding: 1px;
        border: 1px solid #2a2a2a;
      }
      .invoice-table-row {
        text-align: center;
      }
    </style>
  </head>
  <body>
${content}
  </body>
</html>
`;

export default createHtmlMarkup;
