const createInvoice = () =>
  `
 <table class="container">
      <tbody>
        <tr>
          <td class="section info">
            <div style="font-size: 10px" class="section-item">
              <p>Повідомлення</p>
              <strong>Комунальне підприємство «МІСЬКЕ ПАРКОВЕ ГОСПОДАРСТВО» НІКОПОЛЬСЬКОЇ МІСЬКОЇ РАДИ</strong>
              <p>Рахунок одержувача:</p>
              <strong>UA833054820000026006303324483</strong>
              <p>МФО: <strong>305482</strong>, код ЄДРПОУ: <strong>38033142</strong></p>
            </div>
            <div style="font-size: 10px" class="section-item">
              <p>Особовий рахунок №: <strong>14769</strong></p>
              <p>ПІБ: <strong>Пастухова Алла Федорівна</strong></p>
              <p>Адреса: <strong>м. Нікополь, вул. 50 років НЗФ 1/2 кв. 25</strong></p>
            </div>
            <p style="font-size: 10px">До сплати: <strong>-52.28</strong></p>
          </td>
          <td class="section invoice">
            <strong style="font-size: 10px">Рахунок-повідомлення за комунальні послуги за Липень 2024р.</strong>
            <p style="font-size: 10px">
              <strong>Комунальне підприємство «МІСЬКЕ ПАРКОВЕ ГОСПОДАРСТВО» НІКОПОЛЬСЬКОЇ МІСЬКОЇ РАДИ</strong>
              050 039-86-44
            </p>
            <p style="font-size: 10px">Рахунок одержувача: <strong>UA833054820000026006303324483</strong>, МФО: <strong>305482</strong>, код ЄДРПОУ: <strong>38033142</strong></p>
            <table style="font-size: 10px">
              <tbody>
                <tr>
                  <td class="subscriber-account-table-cell">Особовий рахунок №:</td>
                  <td class="subscriber-account-table-cell"><strong>14769</strong></td>
                </tr>
                <tr>
                  <td class="subscriber-account-table-cell">Прізвище, ім'я, по батькові:</td>
                  <td class="subscriber-account-table-cell"><strong>Пастухова Алла Федорівна</strong></td>
                </tr>
                <tr>
                  <td class="subscriber-account-table-cell">Адреса:</td>
                  <td class="subscriber-account-table-cell"><strong>Нікополь, вул. 50 років НЗФ 1/2 кв. 25</strong></td>
                </tr>
                <tr>
                  <td class="subscriber-account-table-cell">Кількість проживаючих:</td>
                  <td class="subscriber-account-table-cell"><strong>2</strong></td>
                </tr>
              </tbody>
            </table>
            <table style="font-size: 8px" class="invoice-table">
       <thead>
                <tr>
                  <th class="invoice-table-cell">Код</th>
                  <th class="invoice-table-cell">Вид платежу</th>
                  <th class="invoice-table-cell">Тариф, грн.</th>
                  <th class="invoice-table-cell" colspan="3">Показання лічильника</th>

                  <th class="invoice-table-cell">Од. виміру</th>
                  <th class="invoice-table-cell">Борг(+) Переплата(-)</th>
                  <th class="invoice-table-cell">Нараховано за 2024р. Лип.</th>
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
                  <td class="invoice-table-cell">-52.28</td>
                  <td class="invoice-table-cell"></td>
                  <td class="invoice-table-cell"></td>
                  <td class="invoice-table-cell"></td>
                  <td class="invoice-table-cell">-52.28</td>
                  <td class="invoice-table-cell"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  `;

export default createInvoice;
