$(function(){
    $.ajax({
        url: "../static/Json/blogList.json",
        cache: false,
        success: function(data){
            if (!data.length){ return false; }
            var len = data.length, html = '';
            for (var i=0; i<len; i++){

                var img = '';
                if (data[i].imgs.length){ img = data[i].imgs[0]; }

                html += [
                    '<li>',
                    '<a href="blogDetail.html?id='+data[i].id+'" title="'+data[i].title+'">',
                    '<div class="date"><p class="md">'+data[i].ym+'</p><p class="year">'+data[i].year+'</p></div>',
                    '<div class="title">'+(data[i].title)+'</div>',
                    '<div class="line"></div>',
                    ''+(img ? '<div class="img"><img class="lazy" data-original="'+img+'"></div>' : '')+'',
                    '<div class="desc">'+(data[i].desc)+'</div>',
                    '</a>',
                    '</li>'
                ].join('');
            };
            $('.blog').find('ul').html(html);

            //var $container = AS.isPhone ? $('#main') : window;
            $('.blog img.lazy').lazyload({effect : "fadeIn", threshold: -50, container: window });
        }
    })


});
