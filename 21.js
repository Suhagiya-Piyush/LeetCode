function mergeTwoLists(list1, list2) {
    // console.log(list1);
    // console.log(list2);
    // let list = list2.concat(list1);
    // list.sort();
    // return list;
    if (!list1) return list2;
    else if (!list2) return list1;
    else if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2
    }
};

let list1 = [1,2,4];
let list2 = [1,3,4];
let x = mergeTwoLists(list1, list2);
console.log(x);