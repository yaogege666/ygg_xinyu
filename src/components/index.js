import icon from './y-icon'
import table from './y-table'
import lov from './lov/y-lov'
import objectInput from './object/y-object-input'
import lovText from './lov/y-lov-text'
import date from './date/y-date'

export default {
    icon,
    table,
    lov,
    objectInput,
    lovText,
    date,
}

export const TableOptionController = {
    options: [],
    add(option) {
        this.options.push(option)
    },
    remove(option) {
        const index = this.options.indexOf(option)
        index !== -1 && (this.options.splice(index, 1))
    },
    getChildOptions(option) {
        return this.options.reduce((ret, item) => {
            item.parentOption === option && (ret.push(item))
            return ret
        }, [])
    },
}
