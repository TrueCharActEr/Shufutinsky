configShufutinsky = [];

class Calendar {
    constructor() {
        this.date = new Date();
    }

    // Возвращает текущую дату в формате YYYY-MM-DD
    getCurrentDate() {
        const year = this.date.getFullYear().toString().padStart(4, '0');
        const month = (this.date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
        const day = this.date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Добавляет указанное количество дней к текущей дате
    addDays(days) {
        this.date.setDate(this.date.getDate() + days);
        return this;
    }

    // Форматирует дату в указанный формат
    format(formatStr) {
        let formattedDate = '';
        const dateObj = {
            yyyy: this.date.getFullYear(),
            MM: (this.date.getMonth() + 1).toString().padStart(2, '0'),
            dd: this.date.getDate().toString().padStart(2, '0')
        };

        for (let i = 0; i < formatStr.length; i++) {
            if (formatStr[i] in dateObj) {
                formattedDate += dateObj[formatStr[i]];
            } else {
                formattedDate += formatStr[i];
            }
        }

        return formattedDate;
    }
}

module.exports = Calendar;