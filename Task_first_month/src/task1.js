module.exports = { getDays }

function getDays(year, month) { 
    let monthList = {
        'january': 1, 'february': 2, 'march': 3, 'april': 4, 'may': 5, 'june': 6, 'july': 7,
        'august': 8, 'september': 9, 'october': 10, 'november': 11, 'december':12
    }

    if (typeof month === 'string' && monthList[month.toLowerCase()]) {
         month = monthList[month.toLowerCase()]; 
    }

    if (month < 1 || month > 12 || typeof month !=='number' || year<1) {
        return false;
    }

    return new Date(year, month, 0).getDate();
}

getDays(2020, 'February');
