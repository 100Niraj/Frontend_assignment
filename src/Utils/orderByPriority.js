export default function orderByPriority(data){
    const keys = Object.keys(data);

    for(var i=0;i<keys.length;i++){
        data[keys[i]].sort((a, b) => {
            const priorityA = a.priority;
            const priorityB = b.priority;
          
            if (priorityA < priorityB) return 1;
            if (priorityA > priorityB) return -1;
            return 0;
          });
    }
}