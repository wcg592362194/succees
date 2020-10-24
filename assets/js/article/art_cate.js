$(function () {
    var layer = layui.layer;
    // 获取文章分类的列表
    initArtCateList();

    function initArtCateList() {
        $.ajax({
            method: 'GET',
            url: '/my/article/cates',
            success: function (res) {
                var htmlStr = template('tpl-table', res);
                $('tbody').html(htmlStr);
            }
        });
    }

    // 添加类别弹框
    var indexAdd = null;
    $('#btnAddCate').on('click', function () {
        indexAdd = layer.open({
            type: 1,
            area: ['500px', '250px'],
            title: '添加文章分类',
            content: $('#dialog-add').html()
        });
    });

    // 添加文章分类，通过委托的形式为表单绑定提交事件
    $('body').on('submit', '#form-add', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/my/article/addcates',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('新增分类失败！');
                }
                // 重新获取分类数据
                initArtCateList();
                // 提示成功消息
                layer.msg('新增分类成功！');
                // 关闭弹出层
                layer.close(indexAdd);
            }
        });
    });
});