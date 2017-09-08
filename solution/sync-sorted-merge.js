'use strict'

const sort = require('fast-sort');


module.exports = (logSources, printer) => {
  //declare storage array 'logs'
  const logs = [];
  //iterate over logSources
  logSources.forEach((source) => {
  //for each logSource's entries
    //push into logs array
    logs.push(source.pop())
  })

  //fast-sort array, call sortedLogs
  const sortedLogs = sort(logs).asc((log) => log.date);
  //for each log in sortedLogs
  sortedLogs.forEach((log) => 
    //print log
    printer.print(log))
  //call done for stats
  printer.done()

}
