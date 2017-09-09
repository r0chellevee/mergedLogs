'use strict'

const sort = require('fast-sort');

module.exports = (logSources, printer) => {
                                            //declare storage array 'logs'
  const logs = [];                          //iterate over logSources
                                                                                          
  logSources.forEach((source) => {          //for each logSource's entries
    logs.push(source.pop())                 //push into logs array
  })
                                            
  const sortedLogs = sort(logs)             //fast-sort array, call sortedLogs
  .asc((log) => log.date);

  sortedLogs.forEach((log) =>               //for each log in sortedLogs                                            
    printer.print(log))                     //print log                                            
    printer.done()                          //call done for stats

}
