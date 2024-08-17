import { ICreateReportsBySubscribersHtmlDocumentDataProps } from '../types/types.type';

const createReportsBySubscribersHtmlDocumentData = ({ periodDate, minDebt, tableData }: ICreateReportsBySubscribersHtmlDocumentDataProps) => `
<div class="container">
      <p class="title">Розрахунки по абонентах (борг)</p>
      <p class="subtitle">за період <span class="date">${periodDate}</span> Борг від ${minDebt} грн.</p>
        <table>
        <thead>
          <tr>
            <th>Будинок</th>
            <th>Квартира</th>
            <th>Абонент</th>
            <th>Абонентський рахунок</th>
            <th>Телефон</th>
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
            ({ benefits, payments, paymentsPercentage, prices, startingBalance, address, subsidy, totalBalance, apartmentNumber, number, ownerName, phoneNumber }) => `<tr>
            <td>${address}</td>
            <td>${apartmentNumber}</td>
            <td>${ownerName}</td>
            <td>${number}</td>
            <td>${phoneNumber}</td>
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

export default createReportsBySubscribersHtmlDocumentData;
