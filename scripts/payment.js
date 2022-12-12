window.addEventListener("DOMContentLoaded", () => {
  const service = 2;
  const ref = localStorage.getItem("ref");

  const button = document.querySelector("button[type='submit']");

  button.addEventListener("click", function (e) {
    e.preventDefault();

    window.location = `https://3ds.challange.shop?service=${service}&ref=${ref}&lang=EN`;
  });

  const dateInputValue = document.getElementById("date-input-value");

  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });

  const dateString = `${month} ${day}`;

  dateInputValue.textContent = dateString;

  const inputDate = document.getElementById("input-date");

  inputDate.addEventListener("changeDate", (e) => {
    const date = new Date(e.target.value);

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });

    const dateString = `${month} ${day}`;

    dateInputValue.textContent = dateString;
  });

  new Datepicker(inputDate, {
    autohide: true,
    todayHighlight: true,
  });
});
