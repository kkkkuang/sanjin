$(function () {

    var currentUrl = window.location.search;
    var currentId; //当前资料的id参数
    var blogs,imgs='';
    var $detl = $('.blog-detl');
    var allBlogData;
    currentId = currentUrl.substring(currentUrl.length-2,currentUrl.length);

    $.ajax({
        url: "../static/Json/blogList.json",
        cache: false,
        success: function(data){
            allBlogData = data;
            for(var i=0;i<data.length;i++){
                if(data[i].id == currentId){
                    blogs = data[i];
                    break;
                }
            }
            showBlog(blogs);
           
        }
    });

    function showBlog(blogs){
        $detl.find('.title').text(blogs.title);
        $detl.find('.date').text(blogs.year + '-' + blogs.ym);
        $detl.find('.desc').html(blogs.desc);
        imgs = "";
        // Add imgs
        for (var j=0, len= blogs.imgs.length; j<len; j++){ 

                imgs += '<img class="lazy" data-original="' + blogs.imgs[j] +'">';
            }
            
        $detl.find('.imgs').html("");
        $detl.find('.imgs').html(imgs);
        currentId = blogs.id;
        // Set event and effect
        $detl.find('img.lazy').lazyload({effect : "fadeIn", threshold: 200, container: $('#main') });	


    };

    //next click event
    var nextBlog;
    $('.ctrl').on('click','.next',function(){  
        //$('body,.main-scroll').scrollTop(0);
        for(var i=0;i<allBlogData.length;i++){
            if(allBlogData[i].id == currentId){
                nextBlog = allBlogData[i+1];
                break;
            }
        }
        showBlog(nextBlog);
    });

    //prev click event
    var prevBlog;
    $('.ctrl').on('click','.prev',function(){
        //$('body,.main-scroll').scrollTop(0);
        for(var i=0;i<allBlogData.length;i++){
            if(allBlogData[i].id == currentId){
                prevBlog = allBlogData[i-1];
                console.log(allBlogData[i]);
                console.log(prevBlog)
                break;
            }
        }
        showBlog(prevBlog);
    });


})