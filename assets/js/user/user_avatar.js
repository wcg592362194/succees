$(function () {
    var layer = layui.layer;
    // 1.1 获取裁剪区域的 DOM 元素
    const $image = $('#image')
    // 1.2 配置选项
    const options = {
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
    }
    // 1.3 创建裁剪区域
    $image.cropper(options)

    // 选择文件的功能
    $('#btnChooseImage').on('click', function () {
        $('#file').click();
    });

    // 为文件选择框绑定 change 事件
    $('#file').on('change', function (e) {
        var filelist = e.target.files;
        if (filelist.length === 0) {
            return layer.msg('请选择照片！')
        }
        var newImgURL = URL.createObjectURL(filelist[0]);
        $image.cropper('destroy').attr('src', newImgURL).cropper(options);
    });
});