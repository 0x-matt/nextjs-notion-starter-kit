var twikoo = {
    init: function (e) {
        console.log(e);
    }
}
function twikooTrick() {
    twikoo.init({
        envId: "https://comm.xiaobotalk.com/",
        el: '#tcomment'
    });
}
twikooTrick();