define(function() {
    var arry = [1, 21, 3, 4, 5]

    function require(arry) {
        //该方法可导入模块 [从小到大排列]，能方法接受一个数组和一个回调函数将模块引入
        return arry.sort(function(a, b) {
            return a - b;
        })

    }

    function define() {
        //该方法可定义模块
        alert('2.Define定义的模块能够正确返回内容')
    }
    console.log(require(arry))
    define()
})