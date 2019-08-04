// 分治
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  let result = lists;
  while (result.length > 1) {
    let tmp = [];
    for (let i = 0; i + 1 < result.length; i += 2) {
      tmp.push(mergeTwoSortedLists(result[i], result[i + 1]));
    }
    if (result.length % 2 === 1) tmp.push(result[result.length - 1]);
    result = tmp;
  }
  return result;
};

function mergeTwoSortedLists(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoSortedLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoSortedLists(l1, l2.next);
    return l2;
  }
}

var l1 = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 5,
      next: null,
    }
  }
};

var l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    }
  }
};

var l3 = {
  val: 2,
  next: {
    val: 6,
    next: null,
  }
};

console.log(mergeKLists([l1, l2, l3]));