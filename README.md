# NOON - Be Sporty  

## Main components

- **Front end:** ReactJS - _responsive_
- **Database:** MongoDB
- **Admin Panal:** ExpressJS
- **API:** ExpressJS - _configured as a proxy server beyond webpack_

## 1- Frontend:
**Freamework:** ReactJS  
**Port:** 3000  

## 2- Database:  

- **Type:** NoSQL
- **DBMS:** MongoDB
- Holds data for _whole website_

## 3- Backend:  

**Framework:** ExpressJS  
**Port:** 3002  
**Main modules:**  
- Admin Panal:
    <ul>
        <li>Root path: `/admin`</li>
        <li>Functionality implemented for add/delete/view a photo or a video</li>
    </ul>
- API:
    <ul>
        <li>Media controller for media components (photos and videos)</li>
        <li>**Response format:** JSON</li>
    </ul>

## Sample request/response for images:

**GET request:** `curl -X GET localhost:3002/media/images`  

**corresponding response:**  

    [
        {
            "_id":"5af9b9525e558418d9fc3081",
            "publishTime":"2 days ago.",
            "captionText":"Great news",
            "source":"./../uploads/Photos/1526315346493-1.jpg",
            "__v":0
        },
        {
            "_id":"5af9bab65e558418d9fc3082",
            "publishTime":"2 days ago.",
            "captionText":"See what happened",
            "source":"./../uploads/Photos/1526315702873-2.jpeg",
            "__v":0
        }
    ]

## Sample request/response for videos:

**GET request:** `curl -X GET localhost:3002/media/videos`  

**corresponding response:**  

    [
        {
            "_id":"5afa4299044bbf247e5444b3",
            "publishTime":"2 days ago.",
            "title":"Kids like it",
            "source":"./../uploads/Videos/1526350489236-1.mp4",
            "coverSource":"./../uploads/Videos/1526350489215-1.jpg",
            "captionText":"Do you like it too ?",
            "iconImageSource":"./../uploads/Videos/1526350489231-play.png",
            "__v":0
        },
        {
            "_id":"5afa4311044bbf247e5444b4",
            "publishTime":"2 days ago.",
            "title":"That's is great!",
            "source":"./../uploads/Videos/1526350609345-2.mp4",
            "coverSource":"./../uploads/Videos/1526350609312-2.jpg",
            "captionText":"Doy you agree?",
            "iconImageSource":"./../uploads/Videos/1526350609340-play.png",
            "__v":0
        }
    ]