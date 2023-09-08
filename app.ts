import express from 'express';

const app = express();
const port = 3000; 

app.get('/api', (req, res) => {
  // Parse query parameters
  const slackName = req.query.slack_name as string;
  const track = req.query.track as string;

  // Create GET request
  app.get("/", (req, res) => {
  res.send("Express on Vercel")
  });

  // Initialize server
  app.listen(5000, () => {
  console.log("Running on port 5000.");
   });

  // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Get current UTC time with validation of +/-2 hours
  const now = new Date();
  const utcTime = new Date(now.getTime() + (now.getTimezoneOffset() + 120) * 60000).toISOString();

  // Construct the JSON response
  const jsonResponse = {
    slack_name: 'kanapp',
    current_day: 'Friday',
    utc_time: utcTime,
    track: 'Backend',
    github_file_url: 'https://github.com/Kahuna04/KanaApp/edit/master/app.ts',
    github_repo_url: 'https://github.com/kahuna04/kanapp',
    status_code: 200,
  };

  // Send the JSON response
  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

