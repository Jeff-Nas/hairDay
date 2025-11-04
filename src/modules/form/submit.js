import dayjs from "dayjs";
const form = document.querySelector('form')
const selectedDateInput = document.getElementById('date');

const inputToday = dayjs(new Date()).format("YYYY-MM-DD"); // define a data atual
selectedDateInput.value = inputToday;
selectedDateInput.min = inputToday; // define a data mínima como sendo a atual


form.onsubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted');
}