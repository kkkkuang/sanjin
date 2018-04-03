$(function(){
    //请求数据
    $.ajax({
        url: "../static/Json/workList.json",
        cache: false,
        success: function(data){
            if (!data.length){ return false; }
            var len = data.length, html = '';
            for (var i=0; i<len; i++){
                html += [
                    '<li>',
                    '<a href="worksDetail.html?id='+data[i].id+'" title="'+(data[i].title)+'">',
                    '<div class="pic"><img class="lazy" data-original="'+data[i].img+'" src="'+data[i].img+'" ><span></span></div>',
                    '<div class="info"><p class="sub-title">'+(data[i].info)+'</p><p class="title">'+(data[i].title)+'</p></div>',
                    '</a>',
                    '</li>'
                ].join('');
            }
            console.log(html);
            $('.works').find('ul').html(html);
            $('.works img.lazy').lazyload({effect : "fadeIn", threshold: -50, container: $('#main') });
        }
    });
})

