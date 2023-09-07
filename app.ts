import express from 'express';
import { Request, Response } from 'express';
import moment from 'moment-timezone';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/get_info', (req: Request, res: Response) => {
    try {
        // Get the Slack name from the query parameters
        const slack_name = req.query.slack_name as string;

        // Get the current day of the week
        const current_day = moment().tz('UTC').format('dddd');

        // Get the current UTC time
        const utc_time = moment().tz('UTC').format('YYYY-MM-DDTHH:mm:ss[Z]');

        // Get the GitHub file URL and repo URL from query parameters
        const github_file_url = req.query.github_file_url as string;
        const github_repo_url = req.query.github_repo_url as string;

        // Prepare the JSON response
        const response = {
            slack_name: 'kanapp',
            current_day: 'Thursday',
            utc_time,
            track: 'backend',
            github_file_url,
            github_repo_url,
            status_code: 200
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
