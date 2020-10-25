$(function () {
    var layer = layui.layer;

    function padZero(n) {
        return n > 9 ? n : '0' + n;
    }
    // 格式化时间的过滤器
    template.defaults.imports.dateFormat = function (date) {
        const dt = new Date(date);
        var y = dt.getFullYear();
        var m = padZero(dt.getMonth() + 1);
        var d = padZero(dt.getDate());

        var hh = padZero(dt.getHours());
        var mm = padZero(dt.getSeconds());
        var ss = padZero(dt.getSeconds());

        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
    };

    // 查询参数对象
    var q = {
        pagenum: 1, // 页码
        pagesize: 2, // 每页显示条数
        cate_id: '', // 文章分类 Id,
        state: '' // 文章的发布状态
    };

    initTable();

    function initTable() {
        $.ajax({
            method: 'GET',
            url: '/my/article/list',
            data: q,
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('获取文章列表失败！');
                }
                // 使用模板引擎渲染
                var htmlStr = template('tpl-table', res);
                $('tbody').html(htmlStr);
            }
        });
    }
});