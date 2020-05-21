export function getOddEvenSortSortAnimations(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    oeSort(auxillaryArray, animations);
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

function oeSort(auxillaryArray, animations) {
    let N = auxillaryArray.length;
    let isSorted = false;

    while (isSorted == false) {
        isSorted = true;
        for (let i = 1; i <= N - 2; i += 2) {
            animations.push([i, i + 1]);
            animations.push([i, i + 1]);
            if (auxillaryArray[i] > auxillaryArray[i + 1]) {
                animations.push([i, auxillaryArray[i + 1]]);
                animations.push([i + 1, auxillaryArray[i]]);
                swap(auxillaryArray, i, i + 1);
                isSorted = false;
            }
            else {
                animations.push([-1, -1]);
                animations.push([-1, -1]);
            }
        }

        for (let i = 0; i <= N - 2; i += 2) {
            animations.push([i, i + 1]);
            animations.push([i, i + 1]);
            if (auxillaryArray[i] > auxillaryArray[i + 1]) {
                animations.push([i, auxillaryArray[i + 1]]);
                animations.push([i + 1, auxillaryArray[i]]);
                swap(auxillaryArray, i, i + 1);
                isSorted = false;
            }
            else {
                animations.push([-1, -1]);
                animations.push([-1, -1]);
            }
        }
    }


    finalarray(auxillaryArray, animations);
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