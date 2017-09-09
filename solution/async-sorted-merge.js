'use strict'

var sort = require('fast-sort');

module.exports = (logSources, printer) => {
	                                             
  const logs = [];                             //create storage variable for promises named 'logs'
                                                
  logSources.forEach((source) => {             //iterate over all logSources   
    logs.push(source.popAsync());              //store all promises into logs array
  })

  return Promise.all(logs)                    //Return all promises with passed logs array
    .then((entries) => {    
    const sortedLogs = sort(entries)          //sort resolved array
    .asc((entry) => entry.date)   
    

    sortedLogs.forEach((log) =>               //for each log from sorted array      
      printer.print(log))                     //print log                  
      printer.done()                          //call printer.done() for stats
    })
    
}