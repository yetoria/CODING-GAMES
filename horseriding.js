function sortHorses(a , b )
{
    return a-b;
}

const n = readline();

if( n < 2 )
{
    console.log(readline());
}
else
{
    let horses = [];
    
    for (let i = 0; i < n; i++) {
       horses.push(parseInt(readline()));  
    }
    
    horses.sort(sortHorses);
    printErr(horses);
    
    let smallestDiff = horses[1] - horses[0];
    
    for(let i = 2 ; i < n; i++ )
    {
        let newDiff =  horses[i] - horses[ i - 1];
        if( newDiff < smallestDiff )
        {
            smallestDiff  = newDiff;
        } 
    }
    
 console.log(smallestDiff);
}