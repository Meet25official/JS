// function TowerOfHanoi(n,main_origin,target,temp){
//     if(n===0){
//         return;
//     }
//     TowerOfHanoi(n-1,main_origin,temp,target);
//     console.log(`Number of ${n} || move to TowerNo : ${target} from Tower No :  ${main_origin}`);
//     TowerOfHanoi(n-1,temp,target,main_origin);
// }
// var num= 3;
// TowerOfHanoi(num,1,2,3);



function TowerOfHanoi(n, main_origin, target, temp1, temp2, temp3) {
    if (n === 0) {
        return;
    }
    TowerOfHanoi(n - 1, main_origin, temp1, temp2, temp3, target);
    console.log(`Number of ${n} || move to TowerNo : ${target} from Tower No : ${main_origin}`);
    TowerOfHanoi(n - 1, temp1, temp2, temp3, target, main_origin);
}
var num = 5;
TowerOfHanoi(num, 'A', 'B', 'C', 'D', 'E');
