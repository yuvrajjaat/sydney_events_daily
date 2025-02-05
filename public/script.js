document.addEventListener('DOMContentLoaded', () => {
    // Fetch events from the API endpoint.
    fetch('/api/events')
      .then(response => response.json())
      .then(events => {
        const container = document.getElementById('events-container');
        events.forEach(event => {
          const card = document.createElement('div');
          card.className = 'event-card';
  
          card.innerHTML = `
            <img src="${event.imageUrl}" alt="${event.title}" class="event-image" />
            <div class="event-title">${event.title}</div>
            <br>
            <div class="event-date">${event.date}</div>
            <br>
            <div class="event-venue">${event.venue}</div>
            <button class="get-tickets-btn" data-ticketurl="${event.ticketUrl}">GET TICKETS</button>
          `;
  
          container.appendChild(card);
        });
  
        // Attach click listeners to each GET TICKETS button.
        document.querySelectorAll('.get-tickets-btn').forEach(button => {
          button.addEventListener('click', (e) => {
            const ticketUrl = e.target.getAttribute('data-ticketurl');
            openEmailModal(ticketUrl);
          });
        });
      })
      .catch(error => console.error('Error fetching events:', error));
  
    // Modal logic
    const modal = document.getElementById('email-modal');
    const closeBtn = document.querySelector('.close');
  
    function openEmailModal(ticketUrl) {
      modal.style.display = 'block';
      document.getElementById('redirect-url').value = ticketUrl;
    }
  
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    };
  
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  
    // Handle the email form submission.
    const emailForm = document.getElementById('email-form');
    emailForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email-input').value;
      const redirectUrl = document.getElementById('redirect-url').value;
  
      fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, redirectUrl })
      })
      .then(response => response.json())
      .then(data => {
        // After a successful subscription, redirect to the original ticket page.
        window.location.href = data.redirect;
      })
      .catch(error => console.error('Error subscribing:', error));
    });
  });
  