declare namespace Express {
    interface Request {
        query: {
            slack_name?: string;
	    current_day?: string;
            track?: string;
            utc_time?: string;
            github_file_url?: string;
            github_repo_url?: string;
            // Add any other query parameters you expect here
        };
    }
}

