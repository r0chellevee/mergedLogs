'use strict'

var sort = require('fast-sort');

module.exports = (logSources, printer) => {
	//create storage variable for promises named 'logs'
  const logs = [];
  //iterate over all logSources
  logSources.forEach((source) => {
    //store all promises into logs array
    logs.push(source.popAsync());
  })

  //Return all promises with passed logs array
  return Promise.all(logs)
    .then((entries) => {
    //sort resolved array
    const sortedLogs = sort(entries).asc((entry) => entry.date)
    //for each log from sorted array
    sortedLogs.forEach((log) => 
      //print log
      printer.print(log))      
      //call printer.done() for stats
      printer.done()
    })
}