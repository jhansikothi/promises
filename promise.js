var a=new Promise((x,y)=>{
    if(1){
        x("hello");
    }else{
        y("bye")
    }

});
var b=new Promise((x,y)=>{
    if(1){
        x("hello");
    }else{
        y("bye")
    }

});
var c=new Promise((x,y)=>{
    if(1){
        x("hello");
    }else{
        y("bye")
    }

});
var d=new Promise((x,y)=>{
    if(1){
        x("hello");
    }else{
        y("bye")
    }

});
a.then((res)=>{
    console.log(res);
return b;
}).then((res)=>{
    console.log(res);
    return c;
}).then((res)=>{
        console.log(res);
        return d;
}).then((res)=>{
            console.log(res);
            return d;
        }).then(res=>{
            console.log(res)
        })
    
.catch(err=>{
    console.log(err)
})
