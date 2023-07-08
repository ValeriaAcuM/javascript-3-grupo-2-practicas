import { formatDate } from "../components/date.js";
import { formatPrice } from "../components/price.js";

function renderCalendar(events) {
  const calendarContainer = document.querySelector("#calendar-container");

  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();

  const calendarHTML = `
    <div class="calendar-header">
      <button id="prevMonthBtn" class="prev-month-btn">&lt;</button>
      <h2 id="calendarMonthYear" class="calendar-month-year"></h2>
      <button id="nextMonthBtn" class="next-month-btn">&gt;</button>
    </div>
    <table class="calendar-table">
      <thead>
        <tr>
          <th>Domingo</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miércoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
          <th>Sábado</th>
        </tr>
      </thead>
      <tbody id="calendarBody" class="calendar-body"></tbody>
    </table>
  `;
  calendarContainer.innerHTML = calendarHTML;

  const calendarMonthYear = document.getElementById("calendarMonthYear");
  const prevMonthBtn = document.getElementById("prevMonthBtn");
  const nextMonthBtn = document.getElementById("nextMonthBtn");
  const calendarBody = document.getElementById("calendarBody");

  renderMonth(currentYear, currentMonth);

  prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentYear--;
      currentMonth = 11;
    }
    renderMonth(currentYear, currentMonth);
  });

  nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentYear++;
      currentMonth = 0;
    }
    renderMonth(currentYear, currentMonth);
  });

  function renderMonth(year, month) {
    calendarMonthYear.textContent = getMonthYear(year, month);

    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    let calendarDaysHTML = "";
    let dayCounter = 1;

    for (let week = 0; week < 6; week++) {
      let weekHTML = "<tr>";

      for (let day = 0; day < 7; day++) {
        if ((week === 0 && day < firstDay) || dayCounter > lastDay) {
          weekHTML += "<td></td>";
        } else {
          const event = events.find(event => {
            const eventDate = new Date(event.date);
            return (
              eventDate.getFullYear() === year &&
              eventDate.getMonth() === month &&
              eventDate.getDate() === dayCounter
            );
          });

          weekHTML += `<td>${dayCounter}`;
          if (event) {
            weekHTML += `<ul class="calendar-events">`;
            event.forEach(e => {
              const formattedDate = formatDate(e.date);
              const formattedPrice = formatPrice(e.price);
              weekHTML += `<li class="calendar-event-item">`;
              weekHTML += `<p class="calendar-event-title">${e.title}</p>`;
              weekHTML += `<p class="calendar-event-date">${formattedDate}</p>`;
              weekHTML += `<p class="calendar-event-location">${e.location.city}</p>`;
              weekHTML += `<p class="calendar-event-price">${formattedPrice}</p>`;
              weekHTML += `</li>`;
            });
            weekHTML += `</ul>`;
          }
          weekHTML += "</td>";
          dayCounter++;
        }
      }

      weekHTML += "</tr>";
      calendarDaysHTML += weekHTML;
    }

    calendarBody.innerHTML = calendarDaysHTML;
  }

  function getMonthYear(year, month) {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    return `${months[month]} ${year}`;
  }
}

export { renderCalendar }