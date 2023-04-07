const appointmentForm = document.querySelector('#appointment-form');

appointmentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nameInput = document.querySelector('#name-input');
  const dateInput = document.querySelector('#date-input');
  const timeInput = document.querySelector('#time-input');
  const notesInput = document.querySelector('#notes-input');
  
  const name = nameInput.value;
  const date = dateInput.value;
  const time = timeInput.value;
  const notes = notesInput.value;
  
  const appointment = {
    name: name,
    date: date,
    time: time,
    notes: notes
  };
  
  // Get the existing appointments from local storage, or create an empty array if none exist
  let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  
  // Add the new appointment to the array
  appointments.push(appointment);
  
  // Save the updated array back to local storage
  localStorage.setItem('appointments', JSON.stringify(appointments));
  
  // Clear the form inputs
  nameInput.value = '';
  dateInput.value = '';
  timeInput.value = '';
  notesInput.value = '';
});
