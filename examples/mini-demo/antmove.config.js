module.exports = {
    "input": "./",
    "output": "alipay-mini-demo",
    "env": "development",
    "platform": "alipay",
    "component2": true,
    "scope": true,
    "type": "wx-alipay",
    "component": false
,
    "hooks": {
        "plugin": function plugin (appJson) {return appJson}
    }
}