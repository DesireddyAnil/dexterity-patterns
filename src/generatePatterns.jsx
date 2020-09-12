

function generatePatterns(n, r){
    let arr = [];
    let flag = [];
    let count = 0;
    let res = [];
    let noOfItems = +r;
    let list = [];

    for(let i=0; i<+n; i++){
        arr.push(i+1);
        flag.push(1);
    }
    for(let i=0; i<+r; i++){
        res.push(-1);
    }
    

    function permutations(arr, pos){
        if(pos > +noOfItems-1){
            let temp = res.toString();
            //console.log(list);
            list.push(temp);
            count++;
        }
        else{
            for(let i=0; i<flag.length; i++){
                if(flag[i]){
                    res[pos]=arr[i];
                    flag[i]=0;
                    permutations(arr,pos+1);
                    flag[i]=1;
                }
            }
        }
    }
    permutations(arr,0);
    //console.log(patterns);
    console.log("number of patterns: "+count+ " " +list.length);
    count=0;
    arr=[];
    flag=[];
    res=[];
    return list;
}



export default generatePatterns;