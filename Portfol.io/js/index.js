
scrollToContent = function(){
    scrollToAnimated(document.body, (document.getElementById("content").getBoundingClientRect().top + window.scrollY), 300);
}

scrollToAnimated = function(element, to, duration) {
    if(duration <= 0){
        return;
    }
    var diff = to - element.scrollTop;
    
    

    var duration = duration * (1 - (window.scrollY / to));
    var tick = (diff/duration) * 10;
    var scrollInterval = setInterval(function() {
        if(element.scrollTop >= to)
        {
            clearInterval(scrollInterval);
            return;
        }
        element.scrollTop += tick;
    }, 10);
}

// window.addEventListener("load", function(e){
//     var width = window.innerWidth
//     || document.documentElement.clientWidth
//     || document.body.clientWidth;

//     var height = window.innerHeight
//     || document.documentElement.clientHeight
//     || document.body.clientHeight;

//     var phoneElement = document.getElementById("phone");
//     phoneElement.classList.add("perspective");
// });

// window.addEventListener("resize", function(e) {
//     setMinSizePhone();
// });

// setMinSizePhone = function(){
//     var phoneElement = document.getElementById("phone");
//     var phoneStyles = window.getComputedStyle(phoneElement);
//     var height = phoneStyles.height;
//     var cutoff = height.indexOf('.');
//     var heightSub = height.substr(0, cutoff);
//     var heightNum = parseInt(heightSub);
//     var newWidth = heightNum*0.461;
//     var newRadius = newWidth * .15;
//     var newBorder = newWidth * .0375;
//     phoneElement.style.width = newWidth.toString() + "px";
//     phoneElement.style.borderRadius = newRadius.toString() + "px";
//     phoneElement.style.borderWidth = newBorder. to;

// }

// perspectiveChange = function(){
//     var phoneElement = document.getElementById("phone");
//     var borderLeft = v;
//     var borderRight;
//     var borderTop;
//     var borderBottom;
// }