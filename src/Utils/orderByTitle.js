//  data = {"key" : [{title:"abc"},{title="qwe"}]}
export default function orderByTitle(data){
    const keys = Object.keys(data);

    for(var i=0;i<keys.length;i++){
        data[keys[i]].sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
          
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
          });
    }
}