export function getHeapSortAnimations(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    heapSort(auxillaryArray, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    array = auxillaryArray;
    return [animations, array];
}

function finalarray(auxillaryArray, animations) {
    let N = auxillaryArray.length;
    for (let i = 0; i < N; i++) {
        animations.push([-2, i]);
    }
    return [auxillaryArray, animations];
}

function heapify(auxillaryArray, animations, N, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    animations.push([l, largest]);
    animations.push([l, largest]);
    if (l < N && auxillaryArray[l] > auxillaryArray[largest]) {
        largest = l;
    }

    animations.push([r, largest]);
    animations.push([r, largest]);
    if (r < N && auxillaryArray[r] > auxillaryArray[largest]) {
        largest = r;
    }

    animations.push([i, largest]);
    animations.push([i, , largest]);
    if (largest != i) {
        swap(auxillaryArray, i, largest);
        heapify(auxillaryArray, animations, N, largest);
    }
}

function heapSort(auxillaryArray, animations) {
    let N = auxillaryArray.length;
    for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
        heapify(auxillaryArray, animations, N, i);
    }

    for (let i = N - 1; i > 0; i--) {
        swap(auxillaryArray, 0, i);

        heapify(auxillaryArray, animations, i, 0);
    }

}

function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}

function arraysAreEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            return false;
        }
    }
    return true;
}