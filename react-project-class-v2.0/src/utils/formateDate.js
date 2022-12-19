export function formateDate(time){
    //格式化时间
        var date = new Date(time)
        const Years=date.getFullYear()
        const Months=date.getMonth()
        const Dat=date.getDate()
        const Hours=date.getHours()
        const Minute=date.getMinutes()
        const seconds=date.getSeconds()
        return Years+"-"+Months+"-"+Dat+" "+Hours+":"+Minute+":"+seconds
}