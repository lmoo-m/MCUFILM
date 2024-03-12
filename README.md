# MCUFILM

Next mcu movie schedule

## HOW TO RUN

first install modules

```bash
  npm install
```

running project

```bash
  npm run dev
```

## API Reference

API BY DilijotSG

Base url

```http
  https://www.whenisthenextmcufilm.com
```

#### Get items

```http
  GET /api
```

#### Result

```javascript
{
  "days_until": 134,
  "following_production": {
    "days_until": 337,
    "id": 822119,
    "overview": "A sequel to Marvel Studios' The Falcon and the Winter Soldier and follows Sam Wilson as the new Captain America.",
    "poster_url": "https://image.tmdb.org/t/p/w500/ghkjPyaPGMfDufOa4D2A51DFGWr.jpg",
    "release_date": "2025-02-12",
    "title": "Captain America: Brave New World",
    "type": "Movie"
  },
  "id": 533535,
  "overview": "Third entry in the \"Deadpool\" franchise. Plot TBA.",
  "poster_url": "https://image.tmdb.org/t/p/w500/klux79RfMSZu7bb0ijdVPDeeuG7.jpg",
  "release_date": "2024-07-24",
  "title": "Deadpool & Wolverine",
  "type": "Movie"
}
```

#### Get items

```http
  GET /api?date={release_date}
```

#### Result

```javascript
{
  "days_until": 337,
  "following_production": {
    "days_until": 415,
    "id": 986056,
    "overview": "A world without Avengers doesn't mean there's not a group of superheroes. There is a group and they're called the Thunderbolts.",
    "poster_url": "https://image.tmdb.org/t/p/w500/9pKEuYSgEoQQwwngJXgeNOnJjr.jpg",
    "release_date": "2025-05-01",
    "title": "Thunderbolts",
    "type": "Movie"
  },
  "id": 822119,
  "overview": "A sequel to Marvel Studios' The Falcon and the Winter Soldier and follows Sam Wilson as the new Captain America.",
  "poster_url": "https://image.tmdb.org/t/p/w500/ghkjPyaPGMfDufOa4D2A51DFGWr.jpg",
  "release_date": "2025-02-12",
  "title": "Captain America: Brave New World",
  "type": "Movie"
}
```

## 🔗 Links

#### Github DilijotSG

[![linkedin](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DiljotSG/MCU-Countdown.git)
