const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cron = require('node-cron');
const scraper = require('./scraper');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
if (typeof ReadableStream === 'undefined') {
    global.ReadableStream = require('web-streams-polyfill/ponyfill').ReadableStream;
  }
  
// API endpoint to get events
app.get('/api/events', (req, res) => {
  fs.readFile('./events.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading events.json', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    try {
      const events = JSON.parse(data);
      return res.json(events);
    } catch (parseError) {
      console.error('Error parsing events.json', parseError);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});

// Endpoint for handling ticket subscription (collect email)
app.post('/subscribe', (req, res) => {
  const { email, redirectUrl } = req.body;
  // In a production app, you might save the email to a database or mailing list.
  console.log(`Email subscribed: ${email}`);
  // Return the redirect URL (could also perform additional logic)
  return res.json({ redirect: redirectUrl });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Initial scrape when the server starts
scraper.fetchEvents();

// Schedule scraping every 24 hours (midnight)
cron.schedule('0 0 * * *', () => {
  console.log('Running scheduled event scraping...');
  scraper.fetchEvents();
});
