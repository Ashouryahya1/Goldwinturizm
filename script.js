document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = form.querySelector("input[type='text']").value;
      const email = form.querySelector("input[type='email']").value;
      const service = form.querySelector("select").value;
      const date = form.querySelector("input[type='date']").value;
  
      firebase.database().ref("bookings").push({
        name,
        email,
        service,
        date,
        timestamp: new Date().toISOString()
      });
  
      alert("Booking request sent successfully!");
      form.reset();
    });
  });
  