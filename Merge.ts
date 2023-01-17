export function merge(col1: number[], col2: number[]) : number[]{
    let newAr : number[] = [];
    let index1 : number = 0;
    let index2 : number = 0;
    while(index1<col1.length && index2<col2.length){
        if(col1[index1]<col2[index2]){
            newAr.push(col1[index1]);
            index1++;
        }else{
            newAr.push(col2[index2]);
            index2++;
        }
    }
    while(index1<col1.length){
        newAr.push(col1[index1]);
        index1++;
    }
    while(index2<col2.length){
        newAr.push(col2[index2]);
        index2++;
    }
    return newAr;
}

