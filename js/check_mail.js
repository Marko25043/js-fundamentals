/*
//<input type="text" id="email">
//<button id="click">Click</button>

let btn=document.querySelector('#click');

btn.addEventListener('click',function(){
    let input=document.querySelector('#email');
    let value=input.value;

    if(value.includes('@') && value.includes('.')){
        let positionAt=value.indexOf('@');
        let positionDot=value.indexOf('.');

        let elementBetween=value.substring(positionAt+1,positionDot);
        
        if(elementBetween.length > 0){
            let beforeAt=value.substring(0,positionAt);
            
            if(beforeAt.length > 2 ){
        
                let afterDot=value.substring(positionDot+1,value.length);
        
                if(afterDot.length > 1){
                    console.log('Mail dobar')
                }
                else{
                    console.log('nije dobar')
                }
            }else{
                console.log('Mail nije dobar');
            }
        }
    }else{
        console.log('nije dobar')
    }
})*/