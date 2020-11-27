const date1 = new Date()
console.log('date1 ', date1)
console.log('-----------------')
const date2 = new Date([0])
console.log('date2', date2)
console.log('date2 toString =>', date2.toString())
console.log('date2 toISOString =>', date2.toISOString())
console.log('-----------------')
const date3 = new Date([1])
console.log('date3', date3)
console.log('date3 toString =>', date3.toString())
console.log('date3 toISOString =>', date3.toISOString())
console.log('-----------------')
const date4 = new Date('Feb 3, 1987 12:34:56:789')
console.log("date4: " + date4);
console.log("date4.getDate(): " + date4.getDate());
console.log("date4.getDay(): " + date4.getDay());
console.log("date4.getFullYear(): " + date4.getFullYear());
console.log("date4.getHours(): " + date4.getHours());
console.log("date4.getMilliseconds(): " + date4.getMilliseconds());
console.log("date4.getMinutes(): " + date4.getMinutes());
console.log("date4.getMonth(): " + date4.getMonth());
console.log("date4.getSeconds(): " + date4.getSeconds());
console.log("date4.getTime(): " + date4.getTime());
console.log("date4.getYear(): " + date4.getYear());
console.log("date4.toDateString(): " + date4.toDateString());
console.log('-----------------')
// Date(year, month, day, hour, minutes, seconds, milliseconds)
const date5 = new Date(1987, 1, 3, 12, 34, 56, 789)
console.log('🚀 ~ file: index.js ~ line 29 ~ date5', date5)

console.log('-----------------')
const days = ['Sunday', 'Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const newDate2 = new Date('10/11/2009')
console.log('🚀 ~ file: index.js ~ line 32 ~ newDate', days[newDate2.getDay()])
const newDate = new Date('11/10/2010')
console.log('🚀 ~ file: index.js ~ line 32 ~ newDate', days[newDate.getDay()])