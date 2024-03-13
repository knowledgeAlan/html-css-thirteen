function wordBreak(s: string, wordDict: string[]): boolean {

    let len:number = s.length;
    let dp:boolean[] = new Array(len+1).fill(false);
    
    dp[len] = true;
    for(let i:number = len-1; i >= 0; i--){
  
      for(let j:number = 0;j < wordDict.length; j++){
  
          if(i+wordDict[j].length <= len){
              if(wordDict[j] === s.substring(i,i+wordDict[j].length)){
                  dp[i]= dp[i+wordDict[j].length];
              }
  
              if(dp[i]){
                  break;
              }
          }
      }
  
      return dp[0];
    }
  
  
  };

  wordBreak("leetcode",["leet","code"])