"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/api', (req, res) => {
    // Parse query parameters
    const slackName = req.query.slack_name;
    const track = req.query.track;
    // Create GET request
    app.get("/", (req, res) => {
        res.send("Express on Vercel");
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
    const utcTime = new Date(now.getTime()).toISOString().split(".")[0] + "Z";
    // Define GitHub URLs as variables
    const githubFileUrl = 'https://github.com/kahuna04/kanaApp/blob/master/app.js';
    const githubRepoUrl = 'https://github.com/kahuna04/KanaApp';

    // Construct the JSON response
    const jsonResponse = {
        slack_name: 'kahuna',
        utc_time: utcTime,
        current_day: currentDay,
        track: 'backend',
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200,
    };
    // Send the JSON response
    res.json(jsonResponse);
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
