import { DateFormats } from '../constants';
import { ICreateInvoiceProps } from '../types/types.type';
import formatDate from './formatDate';

const createInvoice = ({ generalSettings, subscriberAccount, period }: ICreateInvoiceProps): string => {
  const { currentAccount, helpPhone, mfi } = generalSettings;
  const { owner, subscriberAccount: subscriberAccountValue, house, apartment, balance, residents } = subscriberAccount;
  const { name: OwnerName, middleName, surname } = owner ?? {};
  const { street, number } = house;
  const { type, name: streetName } = street;
  const { start } = period;

  const fullName = `${surname} ${OwnerName} ${middleName}`;
  const houseAddress = `м. Нікополь, ${type} ${streetName} ${number}`;
  const address = apartment ? `${houseAddress}, кв. ${apartment}` : houseAddress;
  const date = formatDate({ date: start, dateFormat: DateFormats.period });

  return `
  <table class="container">
    <tbody>
      <tr>
        <td class="section info">
          <div style="font-size: 10px" class="section-item">
            <p>Повідомлення</p>
            <strong>Комунальне підприємство «МІСЬКЕ ПАРКОВЕ ГОСПОДАРСТВО» НІКОПОЛЬСЬКОЇ МІСЬКОЇ РАДИ</strong>
            <p>Рахунок одержувача:</p>
            <strong>${currentAccount}</strong>
            <p>МФО: <strong>${mfi}</strong>, код ЄДРПОУ: <strong>38033142</strong></p>
          </div>
          <div style="font-size: 10px" class="section-item">
            <p>Особовий рахунок №: <strong>${subscriberAccountValue}</strong></p>
            <p>ПІБ: <strong>${fullName}</strong></p>
            <p>Адреса: <strong>${address}</strong></p>
          </div>
          <p style="font-size: 10px">До сплати: <strong>${balance}</strong></p>
        </td>
        <td class="section invoice">
          <strong style="font-size: 10px">Рахунок-повідомлення за комунальні послуги за <span style="text-transform: capitalize;">${date}</span></strong>
          <p style="font-size: 10px">
            <strong>Комунальне підприємство «МІСЬКЕ ПАРКОВЕ ГОСПОДАРСТВО» НІКОПОЛЬСЬКОЇ МІСЬКОЇ РАДИ</strong> ${helpPhone}
          </p>
          <p style="font-size: 10px">Рахунок одержувача: <strong>${currentAccount}</strong>, МФО: <strong>${mfi}</strong>, код ЄДРПОУ: <strong>38033142</strong></p>
          <table style="font-size: 10px">
            <tbody>
              <tr>
                <td class="subscriber-account-table-cell">Особовий рахунок №:</td>
                <td class="subscriber-account-table-cell"><strong>${subscriberAccountValue}</strong></td>
              </tr>
              <tr>
                <td class="subscriber-account-table-cell">Прізвище, ім'я, по батькові:</td>
                <td class="subscriber-account-table-cell"><strong>${fullName}</strong></td>
              </tr>
              <tr>
                <td class="subscriber-account-table-cell">Адреса:</td>
                <td class="subscriber-account-table-cell"><strong>${address}</strong></td>
              </tr>
              <tr>
                <td class="subscriber-account-table-cell">Кількість проживаючих:</td>
                <td class="subscriber-account-table-cell"><strong>${residents}</strong></td>
              </tr>
            </tbody>
          </table>
          <table style="font-size: 10px" class="invoice-table">
            <thead>
              <tr>
                <th class="invoice-table-cell">Код</th>
                <th class="invoice-table-cell">Вид платежу</th>
                <th class="invoice-table-cell">Тариф, грн.</th>
                <th class="invoice-table-cell" colspan="3">Показання лічильника</th>
                <th class="invoice-table-cell">Од. виміру</th>
                <th class="invoice-table-cell">Борг(+) Переплата(-)</th>
                <th class="invoice-table-cell">Нараховано за ${date}</th>
                <th class="invoice-table-cell">Коригув.</th>
                <th class="invoice-table-cell">Оплати</th>
                <th class="invoice-table-cell">До сплати</th>
                <th class="invoice-table-cell">Сплачую</th>
              </tr>
              <tr>
                <th class="invoice-table-cell">-</th>
                <th class="invoice-table-cell">-</th>
                <th class="invoice-table-cell">-</th>
                <th class="invoice-table-cell">Попер.</th>
                <th class="invoice-table-cell">Поточні</th>
                <th class="invoice-table-cell">Різн.</th>
                <th class="invoice-table-cell">-</th>
                <th class="invoice-table-cell">-</th>
                <th class="invoice-table-cell">-</th>
                <th class="invoice-table-cell">-</th>
                <th class="invoice-table-cell">-</th>
                <th class="invoice-table-cell">-</th>
                <th class="invoice-table-cell">-</th>
              </tr>
            </thead>
            <tbody>
              <tr class="invoice-table-row">
                <td class="invoice-table-cell">6</td>
                <td class="invoice-table-cell">Поводження з побутовими відходами</td>
                <td class="invoice-table-cell"></td>
                <td class="invoice-table-cell"></td>
                <td class="invoice-table-cell"></td>
                <td class="invoice-table-cell"></td>
                <td class="invoice-table-cell"></td>
                <td class="invoice-table-cell">${balance}</td>
                <td class="invoice-table-cell"></td>
                <td class="invoice-table-cell"></td>
                <td class="invoice-table-cell"></td>
                <td class="invoice-table-cell">${balance}</td>
                <td class="invoice-table-cell"></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  `;
};

export default createInvoice;
