const createInvoice = ({ subscriberAccount }: { subscriberAccount: string }) => `
  <div class="js-invoice" style="display: flex; font-family: sans-serif">
      <div
        style="
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 30%;
          padding: 16px;
          outline: 1px solid black;
        "
      >
        <div>
          <p style="margin: 0">Повідомлення</p>
          <strong
            >Комунальне підприємство «МІСЬКЕ ПАРКОВЕ ГОСПОДАРСТВО» НІКОПОЛЬСЬКОЇ
            МІСЬКОЇ РАДИ</strong
          >
          <p style="margin: 0">Рахунок одержувача:</p>
          <strong>UA833054820000026006303324483</strong>
          <p style="margin: 0">
            МФО: <strong>305482</strong>, код ЄДРПОУ: <strong>38033142</strong>
          </p>
        </div>
        <div>
          <p style="margin: 0">Особовий рахунок №: <strong>14769</strong></p>
          <p style="margin: 0">
            ПІБ: <strong>Пастухова Алла Федорівна</strong>
          </p>
          <p style="margin: 0">
            Адреса: <strong>м. Нікополь, вул. 50 років НЗФ 1/2 кв. 25</strong>
          </p>
        </div>
        <p style="margin: 0">До сплати: <strong>-52.28</strong></p>
      </div>
      <div
        style="
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 16px;
          outline: 1px solid black;
        "
      >
        <strong
          >Рахунок-повідомлення за комунальні послуги за Липень 2024р.</strong
        >
        <p style="margin: 0">
          <strong
            >Комунальне підприємство «МІСЬКЕ ПАРКОВЕ ГОСПОДАРСТВО» НІКОПОЛЬСЬКОЇ
            МІСЬКОЇ РАДИ</strong
          >
          050 039-86-44
        </p>
        <p style="margin: 0">
          Рахунок одержувача: <strong>UA833054820000026006303324483</strong>,
          МФО: <strong>305482</strong>, код ЄДРПОУ: <strong>38033142</strong>
        </p>
        <div style="display: flex; align-items: center; gap: 20px">
          <div style="display: flex; flex-direction: column; gap: 4px">
            <p style="margin: 0">Особовий рахунок №:</p>
            <p style="margin: 0">Прізвище, ім'я, по батькові:</p>
            <p style="margin: 0">Адреса:</p>
            <p style="margin: 0">Кількість проживаючих:</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px">
            <strong>14769</strong>
            <strong>Пастухова Алла Федорівна</strong>
            <strong>Нікополь, вул. 50 років НЗФ 1/2 кв. 25</strong>
            <strong>2</strong>
          </div>
        </div>
        <table style="border-collapse: collapse">
          <thead>
            <tr>
              <th style="padding: 4px; border: 1px solid #2a2a2a" rowspan="2">
                Код
              </th>
              <th style="padding: 4px; border: 1px solid #2a2a2a" rowspan="2">
                Вид платежу
              </th>
              <th style="padding: 4px; border: 1px solid #2a2a2a" rowspan="2">
                Тариф, грн.
              </th>
              <th style="padding: 4px; border: 1px solid #2a2a2a" colspan="3">
                Показання лічильника
              </th>
              <th style="padding: 4px; border: 1px solid #2a2a2a" rowspan="2">
                Од. виміру
              </th>
              <th style="padding: 4px; border: 1px solid #2a2a2a" rowspan="2">
                Борг(+) Переплата(-)
              </th>
              <th style="padding: 4px; border: 1px solid #2a2a2a" rowspan="2">
                Нараховано за 2024р. Лип.
              </th>
              <th style="padding: 4px; border: 1px solid #2a2a2a" rowspan="2">
                Коригув.
              </th>
              <th style="padding: 4px; border: 1px solid #2a2a2a" rowspan="2">
                Оплати
              </th>
              <th style="padding: 4px; border: 1px solid #2a2a2a" rowspan="2">
                До сплати
              </th>
              <th style="padding: 4px; border: 1px solid #2a2a2a" rowspan="2">
                Сплачую
              </th>
            </tr>
            <tr>
              <th style="padding: 4px; border: 1px solid #2a2a2a">Попер.</th>
              <th style="padding: 4px; border: 1px solid #2a2a2a">Поточні</th>
              <th style="padding: 4px; border: 1px solid #2a2a2a">Різн.</th>
            </tr>
          </thead>
          <tbody>
            <tr style="text-align: center">
              <td style="padding: 4px; border: 1px solid #2a2a2a">6</td>
              <td style="padding: 4px; border: 1px solid #2a2a2a">
                Поводження з побутовими відходами
              </td>
              <td style="padding: 4px; border: 1px solid #2a2a2a"></td>
              <td style="padding: 4px; border: 1px solid #2a2a2a"></td>
              <td style="padding: 4px; border: 1px solid #2a2a2a"></td>
              <td style="padding: 4px; border: 1px solid #2a2a2a"></td>
              <td style="padding: 4px; border: 1px solid #2a2a2a"></td>
              <td style="padding: 4px; border: 1px solid #2a2a2a">-52.28</td>
              <td style="padding: 4px; border: 1px solid #2a2a2a"></td>
              <td style="padding: 4px; border: 1px solid #2a2a2a"></td>
              <td style="padding: 4px; border: 1px solid #2a2a2a"></td>
              <td style="padding: 4px; border: 1px solid #2a2a2a">-52.28</td>
              <td style="padding: 4px; border: 1px solid #2a2a2a"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    `;
