// total 33 question
function answerResponse() {
    var response = { "responder": "", "session": "", "subject":"HTML" };
    //response.responder的部分，是否要抓主程式的登陸識別號token或身份id?
    response.session = period_start(); // 反饋上傳時間
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s1" + j).checked)
            response.q1 = window.btoa(document.getElementById("s1" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s2" + j).checked)
            response.q2 = window.btoa(document.getElementById("s2" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s3" + j).checked)
            response.q3 = window.btoa(document.getElementById("s3" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s4" + j).checked)
            response.q4 = window.btoa(document.getElementById("s4" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s5" + j).checked)
            response.q5 = window.btoa(document.getElementById("s5" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s6" + j).checked)
            response.q6 = window.btoa(document.getElementById("s6" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s1" + j).checked)
            response.q7 = window.btoa(document.getElementById("s7" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s2" + j).checked)
            response.q8 = window.btoa(document.getElementById("s8" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s3" + j).checked)
            response.q9 = window.btoa(document.getElementById("s9" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s4" + j).checked)
            response.q10 = window.btoa(document.getElementById("s10" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s5" + j).checked)
            response.q11 = window.btoa(document.getElementById("s11" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s6" + j).checked)
            response.q12 = window.btoa(document.getElementById("s12" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s1" + j).checked)
            response.q13 = window.btoa(document.getElementById("s13" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s2" + j).checked)
            response.q14 = window.btoa(document.getElementById("s14" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s3" + j).checked)
            response.q15 = window.btoa(document.getElementById("s15" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s4" + j).checked)
            response.q16 = window.btoa(document.getElementById("s16" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s5" + j).checked)
            response.q17 = window.btoa(document.getElementById("s17" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s6" + j).checked)
            response.q18 = window.btoa(document.getElementById("s18" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s1" + j).checked)
            response.q19 = window.btoa(document.getElementById("s19" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s2" + j).checked)
            response.q20 = window.btoa(document.getElementById("s20" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s3" + j).checked)
            response.q21 = window.btoa(document.getElementById("s21" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s4" + j).checked)
            response.q22 = window.btoa(document.getElementById("s22" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s5" + j).checked)
            response.q23 = window.btoa(document.getElementById("s23" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s6" + j).checked)
            response.q24 = window.btoa(document.getElementById("s24" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s2" + j).checked)
            response.q25 = window.btoa(document.getElementById("s25" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s3" + j).checked)
            response.q26 = window.btoa(document.getElementById("s26" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s4" + j).checked)
            response.q27 = window.btoa(document.getElementById("s27" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s5" + j).checked)
            response.q28 = window.btoa(document.getElementById("s28" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s6" + j).checked)
            response.q29 = window.btoa(document.getElementById("s29" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s1" + j).checked)
            response.q30 = window.btoa(document.getElementById("s30" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s2" + j).checked)
            response.q31 = window.btoa(document.getElementById("s31" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s3" + j).checked)
            response.q32 = window.btoa(document.getElementById("s32" + j).value);
    }
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s4" + j).checked)
            response.q33 = window.btoa(document.getElementById("s33" + j).value);
    }
    /*
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s5" + j).checked)
            response.q34 = window.btoa(document.getElementById("s34" + j).value);
    }
    */
    var myJSON = JSON.stringify(response);
    alert(myJSON);
    HTTPPostData("Post.aspx?id=answerResponse", myJSON);
}

function period_start() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    date = today.getDate();
    month = today.getMonth() + 1;
    date = checkTime(date);
    month = checkTime(month);
    year = today.getFullYear();
    dateString = year + "-" + month + "-" + date + "T" + h + ":" + m + ":" + s + ".000Z";
    //document.getElementById('start_time').value = dateString;
    return dateString;
}

function checkTime(i) {
    if (i < 10)
        i = "0" + i;  // add zero in front of numbers < 10
    return i;
} // end function