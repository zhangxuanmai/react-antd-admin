# 说明

```js
// mockjs 文档的github地址: https://github.com/nuysoft/Mock/wiki
// Mock.mock('/user-list', 'get', data)

let Mock = require('mockjs');

let basicData = Mock.mock({
    'list|1-100': [{
        'id|+1': 1,
        'isBoolean': '@boolean(10, 0, true)',//百分之百的true
        'naturalNumber': '@natural(1, 1000)', //大于等于零的整数
        'integer': '@integer(0)', //随机整数
        'float': '@float(1, 100, 3, 6)', //随机浮点数,
        'character': '@character("upper")', //一个随机字符
        'string': '@string("lower", 5, 20)', //一串随机字符串
        'range': '@range(1, 10, 2)', //一个整形数组，步长为2
    }]
});

let Date = Mock.mock({
    'dateList|10': [{
        'date': '@date',
        'date-yyyy-MM-dd': '@date(yyyy-MM-dd)',
        'date-yy-MM-dd': '@date(yy-MM-dd)',
        'date-y-MM-dd': '@date(y-MM-dd)',
        'date-y-M-d': '@date(y-M-d)',
        'line-through': '------------------------------------------------',
        'timessss': '@time', //随机的时间字符串,
        'time-format': '@time()', //指示生成的时间字符串的格式, default: 'HH: mm: ss',
        'time-format-1': '@time("A HH:mm:ss")',
        'time-format-2': '@time("a HH:mm:ss")',
        'time-format-3': '@time("HH:mm:ss")',
        'time-format-4': '@time("H:m:s")',
        'datetime': '@datetime("yyyy-MM-dd A HH:mm:ss")', //返回一个随机的日期和时间字符串
        'dateNow': '@now("second")' //获取当前完整时间
    }]
});

let imageList = Mock.mock({
    'imageList|5': [{
        'id|+1': 1,
        'img': '@image',//生成一个随机的图片地址,
        'img-1': '@image("200x100", "#000", "#fff", "png", "Mock.js")', //生成一个200*100, 背景色#000，前景色#fff, 格式png, 文字mock.js的图片
    }]
})

let paragraph = Mock.mock({
    'paragraphList|5': [{
        'id|+1': 1,
        'paragraph1': '@cparagraph(2)', //生成一段2句话的中文文本,
        'paragraph2': '@paragraph(3)', //生成一个3句话的英文文本
        'title': '@title', //随机生成一个英文标题
        'ctitle': '@ctitle', //随机生成一个中文标题
    }]
})

let name = Mock.mock({
    'nameList|5': [{
        'id|+1': 1,
        'name': '@name', //英文名,
        'cname': '@cname', //中文名
    }]
})

let webList = Mock.mock({
    'webList|5': [{
        'id|+1': 0,
        'url': '@url("http", "baidu.com")', //url: http://www.baidu.com
        'protocol': '@protocol', //随机生成一个url协议
        'domain': '@domain', //随机生成一个域名,
        'email': '@email', //随机生成一个邮箱地址,
        'ip': '@ip' //随机生成一个ip地址
    }]
})

let address = Mock.mock({
    'addressList|5': [{
        'id|+1': 1,
        'region': '@region', //生成一个大区
        'province': '@province', //生成一个省份
        'city': '@city', //生成一个市
        'country': '@country', //一个县
        'zip': '@zip', //邮政编码
    }]
})
console.log(address)

```
