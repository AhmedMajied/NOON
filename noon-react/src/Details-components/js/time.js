export const getDurationFromDate = (date) => {
        var today = new Date();
        var newsDate = new Date(date);
        var diffMs = (today - newsDate); // milliseconds
        var diffMins = Math.round(diffMs / 60000); // minutes
        var diffHrs = Math.floor(diffMins / 60); // hours
        var diffDays = Math.floor(diffHrs / 24); // days
        var diffWeeks = Math.floor(diffDays / 7); // weeks
        var diffMonths = Math.floor(diffDays / 30); // months
        var diffYears = Math.floor(diffDays / 365); // years
        if (diffMins <= 1)
            return "1 min ago.";
        else if (diffMins <= 59)
            return diffMins.toString() + " mins ago.";

        else if (diffHrs <= 1)
            return "1 hour ago.";

        else if (diffHrs <= 23)
            return diffHrs.toString() + " hrs ago.";

        else if (diffDays <= 1)
            return "1 day ago.";

        else if (diffDays <= 6)
            return diffDays.toString() + " days ago.";

        else if (diffWeeks <= 1)
            return "1 week ago.";

        else if (diffWeeks <= 4)
            return diffWeeks.toString() + " weeks ago.";

        else if (diffMonths <= 1)
            return "1 month ago.";

        else if (diffMonths <= 11)
            return diffMonths.toString() + " months ago.";

        else if (diffYears <= 1)
            return "1 year ago.";

        else
            return diffYears.toString() + " years ago.";
}