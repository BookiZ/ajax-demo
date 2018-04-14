myButton.addEventListener('click',function(e){
    let request=new XMLHttpRequest()
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            console.log("请求响应都完毕了")
        if(request.status>=200&&request.status<300){
                console.log("说明请求成功")
            console.log(typeof  request.responseText)
            console.log(request.responseText)
            let string=request.responseText
              let object=window.JSON.parse(string)
              console.log(typeof object)
              console.log(object)
              console.log(object.note)


           /* let parser=new DOMParser()
            let xmlDoc=parser.parseFromString(request.responseText,'text/xml')
            console.log("xmlDoc")
            console.log((xmlDoc))
            console.log(xmlDoc.getElementsByTagName('username')[0])
            let title=xmlDoc.getElementsByTagName('username')[0].textContent*/

        }
        else if(request.status>=400){
                console.log("请求失败")
        }
    }
    }

    request.open('get','/xxx')
    request.send()
})
