export default{
    setCookie:(key,val)=>{ //设置cookie
        var Day=30;
        var exp=new Date();
        exp.setTime(exp.getTime()+Day*24*3600*1000);
        document.cookie=key+"="+escape(val)+";express="+exp.toUTCString();
    },
    getCookie:(key)=>{  //获取cookie
        var arr,reg=new RegExp("(^| )"+key+"=([^;]*)(;|$)");
        console.log("reg:"+document.cookie);
        return (arr=document.cookie.match(reg)) ? unescape(arr[2]) : null;
    },
    // 删除cookie
    delCookie:(name)=>{
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=getCookie(name);
        if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
}
