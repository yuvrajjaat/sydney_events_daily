const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// This function scrapes events from a sample event website for Sydney.
// Replace the URL and selectors with those that match your target website.
async function fetchEvents() {
  try {
    const url = 'https://www.eventbrite.com/d/australia--sydney/events/'; // <-- Change to a real event website
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    let events = [];

    // Example scraping logic. Adjust selectors based on the website’s HTML structure.
    $('.event-card').each((i, element) => {
      const title = $(element).find('.event-card-link').text().trim();
      const date = $(element).find('.Typography_body-md-bold__487rx').text().trim();
      const venue = $(element).find('.event-card__clamp-line--one').text().trim();
      const ticketUrl = $(element).find('.event-card-link').attr('href');
      const imageUrl = $(element).find('.event-card-image').attr('src');
      const cleanDate = date.replace(/Check ticket price on event/g, '').trim();

      events.push({
        title,
        date: cleanDate,
        venue,
        ticketUrl,
        imageUrl: imageUrl || ''
      });
    });

    // Save the scraped events data to a JSON file.
    fs.writeFile('./events.json', JSON.stringify(events, null, 2), (err) => {
      if (err) {
        console.error('Error saving events data', err);
      } else {
        console.log('Events data updated successfully.');
      }
    });
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

module.exports = {
  fetchEvents
};
