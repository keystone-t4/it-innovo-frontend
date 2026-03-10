const m=(n,t,s=!0)=>[...n].sort((o,i)=>{const e=new Date(o[t]).getTime(),r=new Date(i[t]).getTime();return s?r-e:e-r});export{m as s};
