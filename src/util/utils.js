import fecha from 'fecha'

const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

/**
 * 驼峰命名转横杠命名
 * @author 韦胜健
 * @date 2018/11/14
 */
function getKebabCase(str) {
    return str.replace(/[A-Z]/g, function (i) {
        return '-' + i.toLowerCase();
    })
}

/**
 * 引入js文件
 * @author  韦胜健
 * @date    2018/11/30 09:46
 */
function addScript(scriptPath) {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptPath);
    const heads = document.getElementsByTagName("head");
    if (heads.length)
        heads[0].appendChild(script);
    else
        document.documentElement.appendChild(script);
}

/**
 * 插入排序
 * @author 韦胜健
 * @date 2018/11/19
 */
function insertSort(arr, func) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let temp = arr[i];
        /*默认已排序的元素*/
        let j = i - 1;
        /*在已排序好的队列中从后向前扫描*/
        while (j >= 0 && func(arr[j], temp)) {
            /*已排序的元素大于新元素，将该元素移到一下个位置*/
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr
}


/**
 * 推迟时间
 * @author 韦胜健
 * @date 2018/11/15
 */
function delay(duration = 100) {
    return new Promise(rs => setTimeout(() => rs(), duration))
}

/**
 * 从数组中删除
 * @author 韦胜健
 * @date 2018/11/19
 */
function removeFromArray(array, target) {
    const index = array.indexOf(target)
    index > -1 && array.splice(index, 1)
}

/**
 * 获取唯一标识符
 * @author 韦胜健
 * @date 2018/11/19
 */
function uuid() {
    let s = [];
    let hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4';                                        // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);   // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    let uuid = s.join('');
    return uuid;
}

/**
 * 填充0字符
 * @author 韦胜健
 * @date 2018/11/19
 */
function zeroize(value, length = 2) {
    let val = value + '';
    let i = length - val.length;
    while (i > 0) {
        val = '0' + val;
        i--;
    }
    return val;
}

/**
 * 转为驼峰命名
 * @author 韦胜健
 * @date 2018/11/19
 */
function camelCase(name) {
    return name
        .replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter;
        }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

/**
 * 深度复制
 * @author weishengjian
 * @date 2018/11/19
 */
export function deepCopy(data) {
    let o;
    switch (typeOf(data)) {
        case 'array':
            o = data.map(item => deepCopy(item))
            break
        case 'object':
            o = {}
            Object.keys(data).forEach(key => o[key] = deepCopy(data[key]))
            break
        case 'date':
            o = new Date()
            o.setTime(data.getTime())
            break
        case 'regExp':
            let pattern = data.valueOf();
            let flags = '';
            flags += pattern.global ? 'g' : '';
            flags += pattern.ignoreCase ? 'i' : '';
            flags += pattern.multiline ? 'm' : '';
            return new RegExp(pattern.source, flags);
        default:
            o = data;
    }
    return o;
}

/**
 * 去掉px,返回数字
 * @author 韦胜健
 * @date 2018/11/19
 */
function removePx(value) {
    return ((value + '').replace(/px/g, '') - 0);
}

/**
 * 判断变量类型
 * @author 韦胜健
 * @date 2018/11/19
 */
function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}

/**
 * 判断是否存在于数组中
 * @author 韦胜健
 * @date 2018/11/19
 */
function oneOf(val, array) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item === val) return true;
    }
    return false;
}

/**
 * 格式化日期对象
 * @author  韦胜健
 * @date    2018/12/13 10:29
 * @param date 将要格式化的日期
 * @param format 格式化字符串
 */
function dateFormat(date, format = "YYYY-MM-DD") {
    return fecha.format(date, format)
}

/**
 * 解析字符串为日期对象
 * @author  韦胜健
 * @date    2018/12/13 10:30
 * @param string 将要解析的字符串
 * @param format 格式化字符串
 */
function dateParse(string, format = "YYYY-MM-DD") {
    return fecha.parse(string, format)
}

/**
 * 使用px单位化
 * @author  韦胜健
 * @date    2019/1/10 10:56
 */
function unit(data) {
    const type = typeOf(data)
    switch (type) {
        case 'string':
            return data;
        case 'number':
            return `${data}px`
        default:
            return null
    }
}

/**
 * 打乱数组
 * @author  韦胜健
 * @date    2019/1/10 10:56
 */
function shuffle(array) {
    array = deepCopy(array)
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array
}

/**
 * 从数组中查找一个
 * @author  韦胜健
 * @date    2019/1/10 10:56
 */
function findOne(array, fn) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (!!fn(item)) return item
    }
    return null
}

/**
 * 从数组中查找多个
 * @author  韦胜健
 * @date    2019/1/10 10:57
 */
function findSome() {
    const ret = []
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (!!fn(item)) ret.push(item)
    }
    return ret
}

/**
 * desc 手机号码格式化
 * @author huyang
 * @date 2018/12/11 13:43
 * @params
 */
export function telFormat(d) {
    if (d == null) return ''
    d = String(d);
    d = d.trim();
    if (d.length >= 11) {
        let d1 = d.substr(d.length - 4, 4);
        let d2 = d.substr(d.length - 8, 4);
        let d3 = d.substr(d.length - 11, 3);
        return d3 + ' ' + d2 + ' ' + d1;
    } else {
        return d;
    }
}

/**
 * desc 金额格式化，并保留两位小数
 * @author huyang
 * @date 2018/12/11 13:45
 * @params
 */
export function moneyFormat(val) {
    if (val || val == 0) {
        val = val.toString().replace(/\$|\, /g, '');
        if (isNaN(val)) {
            val = '0';
        }
        const sign = val == (val = Math.abs(val));
        val = Math.floor(val * 100 + 0.50000000001);
        let cents = val % 100;
        val = Math.floor(val / 100).toString();
        if (cents < 10) {
            cents = '0' + cents;
        }
        for (let i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
            val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3));
        }
        return (sign ? '' : '-') + val + '.' + cents;
    }
}

/**
 * desc 转化为人民币显示，并保留两位小数
 * @author huyang
 * @date 2018/12/11 13:47
 * @params
 */
export function cnyFormat(d) {
    // 转换为人民币显示
    if (!d) {
        return '￥0';
    }
    if (isNaN(d)) {
        return '无效的金额';
    }
    let dd = parseFloat(d);
    return '￥' + String(dd.toFixed(2)).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}

/**
 * desc 转化为百分比显示，并保留两位小数
 * @author huyang
 * @date 2018/12/11 13:47
 * @params
 */
export function percentNumFormat(d) {
    //转换为两位小数
    if (d == null) {
        return "";
    }
    if (isNaN(d)) {
        return "";
    }
    return parseFloat(d).toFixed(4) * 100 + '%';
}

/**
 * 向下查找组件
 * @author 韦胜健
 * @date 2018/11/19
 */
function findComponentsDownward(context, componentName) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}

/**
 * 向上查找组件
 * @author 韦胜健
 * @date 2018/11/19
 */
function findComponentsUpward(context, componentName) {
    let parents = [];
    const parent = context.$parent;
    if (parent) {
        if (parent.$options.name === componentName) parents.push(parent);
        return parents.concat(findComponentsUpward(parent, componentName));
    } else {
        return [];
    }
}

/**
 * 向上查找一个组件
 * @author 韦胜健
 * @date 2018/11/19
 */
function findComponentUpward(context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}

/**
 * 是否包含某种样式class
 * @author 韦胜健
 * @date 2018/11/19
 */
function hasClass(cls, clsList) {
    return $utils.oneOf(cls, clsList.value.split(' '));
}

/**
 * 添加class
 * @author 韦胜健
 * @date 2018/11/19
 */
function addClass(el, cls) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

/**
 * 删除class
 * @author 韦胜健
 * @date 2018/11/19
 */
function removeClass(el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = curClass.trim();
    }
}

/**
 * 在元素节点后面添加新的节点
 * @author 韦胜健
 * @date 2018/11/19
 */
function insertAfter(newEl, targetEl) {
    let parentEl = targetEl.parentNode;
    if (parentEl.lastChild === targetEl) {
        // 如果最后的节点是目标元素，则直接添加。因为默认是最后
        parentEl.appendChild(newEl);
    } else {
        //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
        parentEl.insertBefore(newEl, targetEl.nextSibling);
    }
}

/*
 *  禁用全局选择文字功能
 *  @author     martsforever
 *  @datetime   2018/12/28 20:56
 */
function enableSelectNone() {
    addClass(window.document.body, 'pl-body-user-select-none')
}

/*
 *  启用全局选择文字功能
 *  @author     martsforever
 *  @datetime   2018/12/28 20:56
 */
function disabledSelectNone() {
    removeClass(window.document.body, 'pl-body-user-select-none')
}


const $utils = {
    getKebabCase,                               //驼峰命名转横杠命名
    camelCase,                                  //转为驼峰命名
    addScript,                                  //引入js文件
    insertSort,                                 //插入排序
    delay,                                      //推迟时间
    dateFormat,                                 //日期格式化
    dateParse,                                  //字符串格式化为日期
    removeFromArray,                            //从数组中删除
    uuid,                                       //获取唯一标识符
    zeroize,                                    //填充0字符
    deepCopy,                                   //深度复制
    removePx,                                   //去掉px,返回数字
    typeOf,                                     //判断变量类型
    oneOf,                                      //判断是否存在于数组中
    unit,                                       //填补单位，如果是字符串，则返回原数据，如果是数字则返回数字+px
    shuffle,                                    //打乱数组顺序
    findOne,                                    //从数组中查找一个
    findSome,                                   //从数组中查找多个
    telFormat,                                  //电话号码格式化
    moneyFormat,                                //金额格式化
    cnyFormat,                                  //人民币格式化
    percentNumFormat,                           //百分比格式化

    findComponentsDownward,
    findComponentsUpward,
    findComponentUpward,
    hasClass,
    addClass,
    removeClass,
    insertAfter,
    enableSelectNone,
    disabledSelectNone,
}

export default $utils