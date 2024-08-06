import { ICreateHtmlMarkupProps } from '../types/types.type';

const createHtmlMarkup = ({ styles, content }: ICreateHtmlMarkupProps): string => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
     <style>
     ${styles}
    </style>
  </head>
  <body>
  ${content}
  </body>
</html>
`;

export default createHtmlMarkup;
