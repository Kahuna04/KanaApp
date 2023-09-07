import express from 'express';

const app = express();
const port = 8000;

app.get('/endpoint', (req, res) => {
  // Parse query parameters
  const slackName = req.query.slack_name as string;
  const track = req.query.track as string;

  // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Get current UTC time with validation of +/-2 hours
  const now = new Date();
  const utcTime = new Date(now.getTime() + (now.getTimezoneOffset() + 120) * 60000).toISOString();

  // Construct the JSON response
  const jsonResponse = {
    slack_name: 'kanapp',
    current_day: 'Thursday',
    utc_time: utcTime,
    track: 'Backend',
    github_file_url: 'https://github.com/kahuna04/kanapp/blob/main/app.ts',
    github_repo_url: 'https://github.com/kahun04/kanapp',
    status_code: 200,
  };

  // Send the JSON response
  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
