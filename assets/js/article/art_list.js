$(function () {
    var layer = layui.layer;
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