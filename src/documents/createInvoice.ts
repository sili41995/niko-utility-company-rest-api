const createInvoice = ({ subscriberAccount }: { subscriberAccount: string }) => `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>Invoice</title>
       </head>
       <body>
          <p>${subscriberAccount}</p>
       </body>
    </html>
    `;
