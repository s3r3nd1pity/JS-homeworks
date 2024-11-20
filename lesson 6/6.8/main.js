let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortedArray = coursesAndDurationArray
    .sort((a, b) => a.monthDuration - b.monthDuration)
    .filter(length => length.monthDuration > 5)
    .map((value, index) => ({...value, id: index + 1}));
console.log(sortedArray)