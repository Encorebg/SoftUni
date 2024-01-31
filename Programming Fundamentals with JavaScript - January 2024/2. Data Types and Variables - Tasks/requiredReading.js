function requiredReading(pages, pagesInHour, numberOfDays){
    let totalTime = pages / pagesInHour;
    let requiredHoursPerDay = totalTime / numberOfDays;
    
    console.log(requiredHoursPerDay);
}