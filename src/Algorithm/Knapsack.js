import React from "react";

function Knapsack (props){

    console.log("knapsack function", props);
   const v = props.v;
   const w = props.w;
   const n = props.n;
   const W = props.W;
    
    const dp = []
    for(let i = 0; i <= n; i++) {
        dp[i] = []
        for(let j = 0; j <= W; j++) {
           dp[i][j] = 0 
        }
    }
    
    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= W; j++) {
           if(i === 0 || j === 0) {
               dp[i][j] = 0;
           }
           else if(w[i - 1] <= j) {
              dp[i][j] = Math.max(v[i - 1] + dp[i - 1][j - w[i - 1]], dp[i - 1][j]);
              //console.log( v[i - 1] + dp[i - 1][j - w[i - 1]] );
           } else {
              dp[i][j] = dp[i - 1][j];
             // console.log(dp[i-1][j]);
           }
           
          // console.log("here");
           
        }
    }
   // console.log("hey people")
   
    return (
        <div>
            <style>{`
    table{
        align: center;
        border:1px solid white;
       }
    td{
        border:1px solid white;
       }
  `}</style>
        <table >
         <tbody>
           {
                dp.map((numList,i) =>(
                   <tr key={i}>
                    {
                      numList.map((num,j)=>
                         <td  key={j}>{num}</td>
                      )
                    }
                   </tr>
                ))
           }
         </tbody>
       </table>
       <p>Maximum value in the knapsack is {dp[n][W]}</p>
       </div>
    );
}
export default Knapsack