// charAt
console.log('---------- charAt ----------')
const s = 'HOLA Mundo'
console.log(s.charAt(0))
console.log(s.charAt(1))
console.log(s.charAt(2))
console.log(s.charAt(3))
console.log(s.charAt(4))
console.log(s.charAt(5))

// concat
console.log('---------- concat ----------')
const st = "Hacker";
const t = "Rank";
const u = s.concat(t);
console.log(s + " " + t);
console.log(u);


// includes
console.log('---------- includes ----------')
const sIcludes = 'hackaerRank'
console.log(sIcludes.includes())
console.log(sIcludes.includes(""))
console.log(sIcludes.includes('hack'))
console.log(sIcludes.includes('Hack'))

// endsWith
console.log('---------- endsWith ----------')
var sEndsWith = "HackerRank"; 
console.log(sEndsWith.endsWith() + " " + sEndsWith.endsWith(""));
console.log(sEndsWith.endsWith("rank") + " " + sEndsWith.endsWith("Rank"));

// indexOf
console.log('---------- indexOf ----------')
var sindexOf = "HackerRank"; 
console.log(
  sindexOf.indexOf("a") + " " 
  + sindexOf.indexOf("a", sindexOf.length) + " " 
  + sindexOf.indexOf("a", 6)
);
console.log(
  sindexOf.indexOf("an") + " " 
  + sindexOf.indexOf("x") + " " 
  + sindexOf.indexOf(""))

  // slice
console.log('---------- slice ----------')
var sSlice = "HackerRank"; 
console.log(sSlice.slice(0, 6) + " " + sSlice.endsWith(6));
console.log(sSlice.slice() + " " + sSlice.slice(-4, 8) + ' ' + sSlice.slice(-4, -2));

// split
console.log('---------- split ----------')
var ssplit = "HackerRank"; 
console.log(ssplit.split(""));
console.log(ssplit.split("k"));
console.log(ssplit.split());

// startsWith
console.log('---------- startsWith ----------')
var sstartsWith = "HackerRank"; 
console.log(sstartsWith.startsWith("Hack"));
console.log(sstartsWith.startsWith("Hacks"));
console.log(sstartsWith.startsWith("H"));

// substr
console.log('---------- substr ----------')
var ssubstr = "HackerRank"; 
console.log(ssubstr.substr());
console.log(ssubstr.substr(0, 6) + ' ' + ssubstr.substr(6));

// substring
console.log('---------- substring ----------')
var ssubstring = "HackerRank"; 
console.log(ssubstring.substring());
console.log(ssubstring.substring(0, 6) + ' ' + ssubstring.substring(6));

// trim
console.log('---------- trim ----------')
var strim = "    HackerRank    "; 
console.log('original lenth ', strim.length);
strim = strim.trim()
console.log('Trimmeed lenth ', strim.length);

// trimLeft
console.log('---------- trimLeft ----------')
var strimLeft = "    HackerRank    "; 
console.log('original lenth ', strimLeft.length);
strimLeft = strimLeft.trimLeft()
console.log('Trimmeed lenth ', strimLeft.length);

// trimRight
console.log('---------- trimRight ----------')
var strimRight = "    HackerRank    "; 
console.log('original lenth ', strimRight.length);
strimRight = strimRight.trimRight()
console.log('Trimmeed lenth ', strimRight.length);