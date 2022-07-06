const textract = require('textract');
const lineReader = require('line-reader');
const db = require('../database/index.js');


textract.fromFileWithPath("../../docs/LACOPPINA.doc", {preserveLineBreaks:true}, async function( error, text ) {
    console.log(error);
    var textLines = text.split ("\n");
    const personaggi = {}

    for(var line of textLines) {        
        var pgs = line.substring(0,line.indexOf("-"))
        if(pgs.trim() == "" || pgs != pgs.toUpperCase()) continue;
        // console.log("----", line, pgs, pgs.toUpperCase())
        personaggi[pgs.trim()] = true
    }

    await db.query(async (db) => {
        var test = await db.collection("customers").insertOne(personaggi);     
    });
    console.log(personaggi);



})
// lineReader.eachLine('../../docs/LACOPPINA.docx', function(line, last) {
//     console.log(line, last);
// });

