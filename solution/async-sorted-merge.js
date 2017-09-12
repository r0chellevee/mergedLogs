'use strict'

var sort = require('fast-sort');

module.exports = (logSources, printer) => {
	                                             
  const logs = [];                             
    
    logSources.forEach((source) => {
        while (!source.drained) {
            logs.push(source.popAsync())
        }
    })
  
    var promises = Promise.all(logs)                   
    .then((entries) => {    

    
    const sortedLogs = sort(entries)          
    .asc((entry) => entry.date)   
        
        
        sortedLogs.forEach((log) =>  {
            printer.print(log)                                     
        })
        
            printer.done()                       
    })
    
}   