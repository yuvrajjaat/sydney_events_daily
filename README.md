# Sydney Events

This project is a full-stack web application that displays events in Sydney, Australia. The events are automatically scraped from event websites, stored locally, and presented in a responsive, modern interface. When a user clicks on a “GET TICKETS” button, they are prompted to enter their email address and are then redirected to the original event page.

## 📸 Screenshots

### 1. Event Listing Page  
![Screenshot 2025-02-06 032227](https://github.com/user-attachments/assets/75371a34-8b0c-4e74-8479-2b8bb64a9f78)
![Screenshot 2025-02-06 032240](https://github.com/user-attachments/assets/f303cca8-1329-42d9-8388-feab5dc10585)


### 2. Email Subscription Modal  
![Screenshot 2025-02-06 032252](https://github.com/user-attachments/assets/8e219902-3b92-41de-a1d2-024a2ff5445d)


---
## Features

- **Automatic Data Scraping:**  
  The application scrapes event details (title, date, venue, image, and ticket URL) from a specified event website using open-source tools (Axios, Cheerio) every 24 hours.

- **Modern Front-End:**  
  A responsive and visually appealing website built with HTML, CSS, and JavaScript. It includes animated event cards and a modal for email subscription.

- **Email Subscription & Redirection:**  
  On clicking “GET TICKETS”, users can enter their email address. Their email is logged (or could be stored in a database/mailing list in production) before redirecting them to the event’s ticket page.

## Technologies Used

- **Back-End:** Node.js, Express, Axios, Cheerio, Node-cron  
- **Front-End:** HTML5, CSS3 (with modern styling), JavaScript  
- **Others:** GitHub for version control

## Project Structure
```sh
sydney-events/ 
├── package.json 
├── server.js 
├── scraper.js 
├── events.json // Contains the scraped event data (updated every 24 hours) 
├── README.md 
├── REPORT.md 
└── public/ ├── index.html 
            ├── style.css 
└── script.js
```


## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/sydney-events.git
   cd sydney-events

2. **Install Dependencies:**
    Ensure you have Node.js installed, then run:

    ```bash
    npm install
3. **Configure the Scraper:**
    Open scraper.js and update the URL and CSS selectors to match the target event website from which you want to scrape event details.

4. **Run the Application:**
    Start the Express server:

    ```bash
    npm start
    ```
    The server will start on port 3000 (or the port specified in your environment). Open your browser and navigate to: http://localhost:3000

5. **Automated Scraping:**
    The application uses node-cron to run the scraper every 24 hours. When the server starts, it immediately performs an initial scraping of events and updates the event data in events.json.

---
## 📧 Email Handling
When users click on GET TICKETS, they are prompted to enter their email address. In this sample implementation, user emails are logged to the console. For a production environment, consider integrating with a database or an email marketing service (e.g., Mailchimp, SendGrid).

---
## 🔧 Improvements and Future Enhancements
- **Database Integration:** Replace the JSON file with a database like MongoDB or MySQL for better scalability and querying.
- **Error Handling:** Improve logging and add more robust error handling.
- **Enhanced Front-End:** Consider using frameworks like React, Vue, or Angular for a more dynamic user experience.
- **Security Enhancements:** Add HTTPS, input validation, and protection against common vulnerabilities (XSS, CSRF, etc.).

---
## Contact
For any questions or feedback, feel free to reach out to [yuvrajsogarwal@gmail.com].
