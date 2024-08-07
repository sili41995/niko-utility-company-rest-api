import { ICreateReportsByStreetsHtmlDocumentDataProps } from '../types/types.type';

const createReportsByStreetsHtmlDocumentData = ({ title, periodStart, periodEnd, tableData }: ICreateReportsByStreetsHtmlDocumentDataProps) => `
<div class="container">
      <p class="title">${title}</p>
      <p class="subtitle">за період з <span class="date">${periodStart}</span> по <span class="date">${periodEnd}</span></p>
        <table>
        <thead>
          <tr>
            <th>Вулиця</th>
            <th>Борг на початок періоду</th>
            <th>Нараховано</th>
            <th>Сплачено всього</th>
            <th>В т.ч. пільги</th>
            <th>В т.ч. субсидія</th>
            <th>Борг на кінець періоду</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
        ${tableData
          .map(
            ({ benefits, payments, paymentsPercentage, prices, startingBalance, streetName, subsidy, totalBalance }) => `<tr>
            <td>${streetName}</td>
            <td>${startingBalance}</td>
            <td>${prices}</td>
            <td>${payments}</td>
            <td>${benefits}</td>
            <td>${subsidy}</td>
            <td>${totalBalance}</td>
            <td>${paymentsPercentage}</td>
          </tr>`
          )
          .join('')}
        </tbody>
      </table>
    </div>
`;

export default createReportsByStreetsHtmlDocumentData;
