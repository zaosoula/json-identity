const fs = require('fs');
const path = require('path');
const indentChar = 2;

let cache = {};
if (typeof Array.prototype.reIndexOf === 'undefined') {
  Array.prototype.reIndexOf = function(rx) {
    for (var i in this) {
      if (this[i].toString().match(rx)) {
        return parseInt(i);
      }
    }
    return -1;
  };
}

function md2json(file) {

  file = 'models/'+ file + '/readme.md';

  if(typeof cache[file] !== 'undefined') {
    return cache[file];
  }else{
    console.log('Reading ' + file);

  }
  let data = fs.readFileSync(file, 'utf8');

  let lines = data.split('\n')
  let startIndex = startTagIndex(lines) + 1;
  let endIndex = endTagIndex(lines);
  lines = lines.slice(startIndex, endIndex);

  let sourceList = [];

  for (let line of lines) {
    let level = indentLevel(line, indentChar);
    let regexExtract = line.match(/`(.*)`\s*(?:\(([^-]*)\))?/);
    let key = regexExtract[1];
    let type = regexExtract[2];

    sourceList.push({
      key: key,
      type: type,
      indent: level
    })
  }

  var indentedList = [];
  var roots = {
    0: indentedList
  };

  sourceList.forEach(function(item) {
    if (!roots[item.indent].splice) {
      roots[item.indent] = roots[item.indent].children = [];
    }
    roots[item.indent].push(item);
    if (item.type == 'object') {
      roots[+item.indent + 1] = item;
    }
  });

  let strucuredList = {};
  for (let item of indentedList) {
    buildStructured(strucuredList, item);
  }

  function buildStructured(parent, item) {
    parent[item.key] = (item.type == 'object') ? {} : null;
    if (typeof item.children !== 'undefined') {
      for (let _item of item.children) {
        buildStructured(parent[item.key], _item);
      }
      cache[file] = strucuredList;

    } else {
      cache[file] = strucuredList;

      if (typeof item.type !== "undefined" && /array\(\[(.*)\]\(.*\)\)/.test(item.type)) {
        parent[item.key] = [md2json(item.type.match(/array\(\[(.*)\]\((.*)\)\)/)[1])];

      }else if (typeof item.type !== "undefined" && /\[(.*)\]\(.*\)/.test(item.type)) {
        parent[item.key] = [md2json(item.type.match(/\[(.*)\]\(.*\)/)[1])];

      }


    }
  }

  cache[file] = strucuredList;
  return strucuredList;





  function startTagIndex(arr) {
    return arr.reIndexOf(/(.*)<!-- ?model ?start ?-->(.*)/i);
  }

  function endTagIndex(arr) {
    return arr.reIndexOf(/(.*)<!-- ?model ?end ?-->(.*)/i);
  }




  function indentLevel(text, level) {
    return text.match(/^\s*/)[0].length / level;
  }

}

console.log(JSON.stringify(md2json('.'), true, 2));
