const fs = require('fs');
const input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n').map(Number);
const N = input.shift();

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLastIdx() {
    return this.heap.length - 1;
  }

  insert(data) {
    this.heap.push(data);

    let curIdx = this.getLastIdx();
    const curData = this.heap[curIdx];

    while (curIdx > 0) {
      // 부모 노드의 인덱스와 값 할당
      const parentIdx = Math.floor((curIdx - 1) / 2);
      const parentData = this.heap[parentIdx];

      // 현재 데이터가 부모 데이터보다 크거나 같을 경우 느슨한 정렬이 된 상태이므로 break
      if (curData >= parentData) break;

      this.heap[curIdx] = parentData;
      curIdx = parentIdx;
    }
    this.heap[curIdx] = curData;
  }

  delete() {
    if (this.heap.length === 0) {
      return 0;
    } else if (this.heap.length === 1) {
      return this.heap.pop();
    } else {
      const data = this.heap[0];

      this.heap[0] = this.heap[this.getLastIdx()];
      this.heap.pop();

      let curIdx = 0;
      const curData = this.heap[0];

      while (curIdx <= this.getLastIdx()) {
        const leftChildIdx = curIdx * 2 + 1;
        const rightChildIdx = curIdx * 2 + 2;

        // 자신이 리프 노드일 경우
        if (leftChildIdx > this.getLastIdx()) break;

        const leftChildData = this.heap[leftChildIdx];
        const rightChildData = this.heap[rightChildIdx];

        const childIdx = rightChildData !== undefined && rightChildData < leftChildData ? rightChildIdx : leftChildIdx;
        const childData = this.heap[childIdx];

        // 느슨한 정렬이 된 상태
        if (curData <= childData) break;

        this.heap[curIdx] = childData;
        curIdx = childIdx;
      }

      this.heap[curIdx] = curData;

      return data;
    }
  }
}

const minHeap = new MinHeap();
const answer = [];

for (let i = 0; i < N; i++) {
  if (input[i] > 0) {
    minHeap.insert(input[i]);
  } else {
    answer.push(minHeap.delete());
  }
}

console.log(answer.join('\n'));
