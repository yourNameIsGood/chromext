/***
    content_script.js 只要使用了插件，这里的function就能自动加载
    无需background.js
***/

function rend() {
    var url = window.location.href ;

    var nums = document.getElementsByClassName("tal f10 y-style");
    for(i in nums){var count = nums[i].innerHTML;
        if(count>500){
            var tr = (nums[i].parentNode);
            tr.style.backgroundColor="#ff0" ;
        }
    }

	//clpig ad removing
    target = "clpig";
    if(url.indexOf(target)>-1){
        console.log('out start');
        var elements = document.getElementsByTagName("iframe");
        while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
        }
        var ele = document.getElementById("alm_r_b_15672");
        ele.parentNode.removeChild(ele);
        console.log("out done");
        // In case it does not work, do it 5 seconds later again
        setTimeout(function(){
            console.log("later start");
            var elements = document.getElementsByTagName("iframe");
            while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
            }
            var ele = document.getElementById("alm_r_b_15672");
            ele.parentNode.removeChild(ele);
            console.log("later done");
        },5555);
    }

    // cn163.net  remove the cover hidden ad
    target = "cn163.net";
    if(url.indexOf(target)>-1){
        var a = document.getElementsByTagName("a");
        a[0].parentNode.removeChild(a[0]);
    }


    
    //如果觉得性能不好，可以指定域名生效
    //v2ex reply_content 中找email
    //var nums = document.getElementsByClassName("reply_content");
    //var reg = /[a-zA-Z0-9]+@[0-9a-zA-Z]+\.[a-zA-Z0-9]{2,4}/;
    //for(i in nums){
    //    var reply = nums[i].innerHTML;
    //    if(reg.test(reply)){
    //        var tr = (nums[i].parentNode);
    //        tr.style.backgroundColor="#ff0" ;
    //    }
    //}

    // chrome.runtime.sendMessage({purpose: 'can_spacing'},
    //     function(response) {
    //         console.log('can_spacing: %O', response.result);

    //         //moment of glory!!
    //         // var nums = document.getElementsByClassName("tal f10 y-style");
    //         // for(i in nums){var count = nums[i].innerHTML;
    //         //     if(count>500){
    //         //         var tr = (nums[i].parentNode);
    //         //         tr.style.backgroundColor="#ff0" ;
    //         //     }
    //         // }
    //     }
    // );
}

rend();
