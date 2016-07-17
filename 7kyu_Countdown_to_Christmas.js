//Challenge: https://www.codewars.com/kata/56f6b23c9400f5387d000d48

const daysUntilChristmas=day=>(diff=>diff>=0 ? diff : 365+diff)((new Date(day.getFullYear()+(day.getMonth()==11 && day.getDate()>25 ? 1 : 0),11,25)-day)/86400000);
