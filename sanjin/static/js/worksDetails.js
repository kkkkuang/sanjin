$(function () {
    var $detl = $('.works-detl');
    var currentUrl = window.location.search;
    var currentId; //当前资料的id参数
    var currentData,imgs = ""
    currentId = currentUrl.substring(currentUrl.length-2,currentUrl.length);
    $("img.lazy").lazyload({ threshold :180});
   //模拟发送ajax请求数据
    $.ajax({
        url: "../static/Json/worksJson.json",
        cache: false,
        success: function(json){
            // cIndex = $.isPosInt(id) ? getIndex(id,json) : 0;
            // mIndex = json.length - 1;
            // works = json;
            // showWorks();
            // createElement(json[currentId]);
            for(var i=0;i<json.length;i++){
                if(json[i].id == currentId){
                    currentData = json[i];
                    break;
                }
            }
            console.log(currentData);
            createElement (currentData) ;
        },
        error: function(){
            $detl.hide().after('<div>No data</div>');
        }
    });

    //点击播放
    $('.btn-play').on('click',function(){ 
        if(typeof currentData == 'object'){ //如果数据加载完成
            setVideo(currentData.vid);
        }
    });	


    function createElement (data) {
       // console.log(data);
        $detl.find('.title').text(data.title);
		$detl.find('.producer').html(data.producer);
		$detl.find('.desc').html(data.desc);
        $detl.find('.date').text(data.date);
        
		for (var j=0, len= data.imgs.length; j<len; j++){ 
            imgs += '<img class="lazy" data-original="' +"../"+ data.imgs[j] +'" src="' +"../"+ data.imgs[j] +'">';
        }
         console.log(imgs)
		$detl.find('.imgs').html(imgs);
		$detl.find('.cover img').attr('src',"../"+data.vImg).attr('data-original',"../"+data.vImg);
    };



    function setVideo(vId){
        $detl.find('.cover').hide();
        $detl.find('.video').append('<div id="ykPlayer"></div>');

        player = new YKU.Player('ykPlayer',{
            styleid: '1',
            client_id: 'ec1cdd8fa902f54c',
            vid: vId,
            autoplay: true,
            show_related: false,
            events: {
                onPlayerReady: function(){
                    // if (AS.os != 'PC'){
                    //     $('.x-video-poster img').attr('src',src).attr('style','display:block!important');
                    // }
                },
                onPlayEnd: function(){
                    // if (AS.os == 'PC'){
                    //     stopVideo();
                    //     showCover();
                    // }
                    // else {
                    //     setVideo(data,src);
                    // }
                }
            }
        })
    }

      


})