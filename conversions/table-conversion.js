'use strict';
var jQuery = require('jquery');
var liCoversion = require('./table-conversion');

function getHeaders(table) {
    var trWithTh = table.find('th');
    var headers = new Array(trWithTh.size());
    trWithTh.each(function(index) {
        var thElement = table.find(this);
        headers[index] = require('../conversions/paragraph-conversion').convert(thElement);
    });
    return headers;
}

function getRows(table) {
    var trElements = table.find('tr:has(td)');
    var data = new Array(trElements.size());

    trElements.each(function(i) {
        var row = table.find(this);
        var tdElements = row.children('td');
        data[i] = new Array(tdElements.size());
        tdElements.each(function(ii) {
            var cell = table.find(this);
            data[i][ii] = cellToText(cell);
        });
    });
    return data;
}

function getHeaders(table) {
    var trWithTh = table.find('th');
    var headers = new Array(trWithTh.size());
    trWithTh.each(function(index) {
        var thElement = table.find(this);
        headers[index] = require('../conversions/paragraph-conversion').convert(thElement);
    });
    return headers;
}


function cellToText(cellElement) {
    var pConvert = require('./paragraph-conversion').convert;
    var text = pConvert(cellElement);
    var splittedCell = text.split(/(\r\n|\n|\r)/);
    text = '';
    for (var i = 0; i< splittedCell.length; i++) {
        if (splittedCell[i] !== '') {
            var prettyText = splittedCell[i].replace(/(\r\n|\n|\r)/, '');
            if (prettyText !== '')
            text += (' <p>' + prettyText + '</p> ');
        }
    }
    return text;
}

module.exports = {
    selector: 'table.avia-table',
    convert: function(table) {
        var text = '| ';
        var headers = getHeaders(table);
        for (var i = 0; i < headers.length; i++) {
            text += (headers[i] + ' | ');
        }
        text += '\r\n';
        text += '| ';
        for (i = 0; i < headers.length; i++) {
            text += '--- | ';
        }
        text += '\r\n';
        var rows = getRows(table);
        for (var i = 0; i < rows.length; i++) {
            text += '| ';
            for (var ii  = 0; ii < rows[i].length; ii++) {
                text += (rows[i][ii] + ' | ');

            }
            text += '\r\n';
        }
        return text;
    }
};
