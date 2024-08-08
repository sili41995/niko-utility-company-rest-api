import { ICreateReportsByHousesHtmlDocumentDataProps } from '../types/types.type';

const createReportsByHousesHtmlDocumentData = ({ periodStart, periodEnd, tableData }: ICreateReportsByHousesHtmlDocumentDataProps) => `
<div class="container">
      <p class="title">Розрахунки по будинках</p>
      <p class="subtitle">за період з <span class="date">${periodStart}</span> по <span class="date">${periodEnd}</span></p>
        <table>
        <thead>
          <tr>
            <th>Будинок</th>
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
            ({ benefits, payments, paymentsPercentage, prices, startingBalance, address, subsidy, totalBalance }) => `<tr>
            <td>${address}</td>
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

export default createReportsByHousesHtmlDocumentData;
