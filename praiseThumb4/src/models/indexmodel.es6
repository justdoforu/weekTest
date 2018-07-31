import rpA from 'request-promise';

class imdexModel{
    constructor(ctx){
        this.ctx = ctx;
    }

    updateNum(){
        const options = {
            uri:'http://localhost/yd/praiseThumb2/praise.php',
            methods:'GET'
        }

        return new Promise((resolve,reject)=>{
            rpA(options).then(function(result){
                const info = JSON.parse(result);
                if(info){
                    resolve({data:info.result});
                }else{
                    reject({});
                }
                console.log(info);
            })
        })
    }
}

export default imdexModel