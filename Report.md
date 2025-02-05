# Sydney Events Project Report

## Overview

The Sydney Events project is a full-stack application that displays a list of events in Sydney, Australia. The primary objectives were:
- To automatically scrape event details from selected event websites.
- To display these events on a responsive and aesthetically pleasing web page.
- To capture user email addresses when they click on “GET TICKETS” and redirect them to the event’s original website.
- To schedule the scraping process to run every 24 hours to keep the data updated.

## Approach

### Back-End Development
- **Express Server:**  
  The back-end server is built using Node.js and Express. It serves static files (HTML, CSS, and JavaScript) and exposes API endpoints for fetching event data and handling email subscriptions.
  
- **Web Scraping:**  
  Using Axios and Cheerio, the scraper fetches the HTML content from a target event website. Specific CSS selectors extract relevant data (event title, date, venue, image, and ticket URL), which is then stored in a JSON file (`events.json`).

- **Scheduling:**  
  The scraper is scheduled with `node-cron` to run every 24 hours, ensuring that event data remains current.

### Front-End Development
- **Responsive Design:**  
  The front-end is built with modern HTML and CSS. A grid layout is used to display event cards that include an image, title, date, venue, and a “GET TICKETS” button.
  
- **User Interaction:**  
  JavaScript handles fetching event data from the server, rendering event cards dynamically, and managing the email subscription modal. When the user submits their email, the application logs the email (or stores it in a production scenario) and then redirects the user to the original event ticket page.

## Challenges Faced

1. **Scraping Accuracy:**  
   - Extracting precise information from varying HTML structures required careful selection of CSS selectors.
   - Ensuring that unnecessary text (e.g., “Check ticket price on event”) was filtered out demanded additional string manipulation.

2. **Scheduling Reliability:**  
   - Setting up a robust scheduling mechanism was key. Using `node-cron` provided a simple solution, but it must be monitored in a production environment.

3. **Responsive Design:**  
   - Creating a design that works across devices required testing different screen sizes and making adjustments to CSS styles.

## Future Improvements

- **Database Integration:**  
  Transitioning from a JSON file to a database (such as MySQL or MongoDB) will enhance scalability and allow more robust querying and data management.

- **Enhanced Error Handling:**  
  Improved error logging and fallback mechanisms for both scraping and user input handling would increase reliability.

- **Advanced Front-End Frameworks:**  
  Refactoring the front-end using frameworks like React, Angular, or Vue.js could provide a more dynamic user experience.

- **Security Measures:**  
  Adding input validation, HTTPS, and protection against common vulnerabilities is crucial for a production deployment.

## Conclusion

The Sydney Events project effectively demonstrates the integration of open-source tools for web scraping, scheduled data updates, and a modern web interface. While the current implementation meets the project’s requirements, there are numerous avenues for enhancement to build a more robust and scalable solution.
