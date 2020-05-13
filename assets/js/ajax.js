$(function () {

    setInterval(function () {

        $.ajax({
            url: '/index/',
            method: 'GET',
            success: function (json) {
                let res_shot = json.res_shot;
                let res_hit = json.res_hit;
                if (res_shot == null) {
                    res_shot = 0;
                    res_hit = 0;
                }
                $('.ajax-shot').text(res_shot).css('color', 'brown');
                $('.ajax-hit').text(res_hit).css('color', 'brown');
                console.log('res_shot');
                console.log('res_hit');
                setTimeout(function () {
                    $('.ajax-shot, .ajax-hit').css('color', '#17C2D7');

                }, 2000);
            },
            error: function () {
                console.log('Error');
            }
        })
    }, 3000)
})