$(function () {
    // 获取用户的的基本信息
    getUserInfo();
});


function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        success: function(res) {
            console.log(res);
        }
    });
}