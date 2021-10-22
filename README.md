## Sing Song

### Project Description:

Sing Song is a posting board that connects music lovers with local artists and performers. 
Are you wanting to listen to live music? Search the site for gigs that are happening around you! 
Are you an artist that wants to share upcoming performance dates? Post your gig on Sing Song to let people know you are performing!

## Wireframes

### Mobile

![image](https://user-images.githubusercontent.com/89525025/138503219-17f7ef2a-8f79-400a-b845-aa07b8039025.png)


### Desktop

![image](https://user-images.githubusercontent.com/89525025/138525884-e81316f6-e7df-4589-a94b-bc96345fa1d7.png)


## Component Hierarchy

![image](https://user-images.githubusercontent.com/89525025/138506232-9224b485-1b3d-4ada-a7dd-98150a36f480.png)


## API and Data Sample

This API was made using [AirTable](https://airtable.com/). The following is the reponse from a GET request populated with three fictional gigs.

```
{
    "records": [
        {
            "id": "rechD8z6kribLDFop",
            "fields": {
                "address": "3201 N Davidson St ste b, Charlotte, NC 28205",
                "artist": "Mouse Rat",
                "date": "2021-10-29",
                "time": "9:00 pm - till we stop",
                "link": "https://open.spotify.com/artist/1wEhQnXaoQcWwWhiFYnIX1"
            },
            "createdTime": "2021-10-22T20:16:32.000Z"
        },
        {
            "id": "recDWEGpv3Khn2LOK",
            "fields": {
                "address": "1908 East Blvd Charlotte, NC 28203",
                "artist": "Spinal Tap",
                "date": "2021-10-30",
                "time": "8:30 pm - 11:30 pm",
                "link": "https://open.spotify.com/artist/65X3sG8LVBQN5033RqB6qn"
            },
            "createdTime": "2021-10-22T20:24:57.000Z"
        },
        {
            "id": "recHYp0B7eBTJmXLA",
            "fields": {
                "address": "1200 W Tyvola Rd Charlotte, NC 28217",
                "artist": "Scrantonicity",
                "date": "2021-10-29",
                "time": "9:00 pm - midnight",
                "link": "https://www.youtube.com/watch?v=YXHo1eJWlZI&ab_channel=NCTChicago"
            },
            "createdTime": "2021-10-22T20:31:05.000Z"
        }
    ]
}
```

### MVP/PostMVP

#### MVP 

- [ ] Utilize React Router, installed via npm
- [ ] Have at least 6 separate, rendered components
- [ ] Use Axios to consume data from Airtable, and GET/render that data in your components
- [ ] Use "Mobile First" principles to dynamically style web app
- [ ] Use Axios to POST/create new data on Airtable
- [ ] Use only React for DOM Manipulation
- [ ] Display gigs after search (based on location, date, and artist)
- [ ] Post gigs using a form

#### PostMVP  

- [ ] Utilize the Google Maps API to display gigs geographically
- [ ] Add ability to anonymously "like" gigs (ex. "I'll be there!" +1)
- [ ] Display gigs based on "likes"

## Project Schedule

|  Day | Deliverable | Status
|---|---|---|
|Thu Oct 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Fri Oct 22| Prject Approval | Complete
|Sat Oct 23| Boilerplate react / Create API | Incomplete
|Sun Oct 24| | |
|Mon Oct 25| GET / POST / Styling | Incomplete
|Tue Oct 26| Styling | Incomplete
|Wed Oct 27| MVP complete / Google Maps PMVP | Incomplete
|Thu Oct 28| Likes PMVP | Incomplete
|Fri Oct 29| Present | Incomplete


## SWOT Analysis

### Strengths:

Organization and functionality (making the code look good)

### Weaknesses:

CSS/Styling

### Opportunities:

I am looking forward to challenging myself with the "likes" functionality as well as the styling.

### Threats:

Getting too disorganized and inefficient within the CSS
