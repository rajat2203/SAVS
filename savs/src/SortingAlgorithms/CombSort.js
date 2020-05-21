export function getCombSortAnimations(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    combSort(auxillaryArray, animations);
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

function getNextGap(gap) {
    gap = gap * 10;
    gap = Math.floor(gap / 13);

    if (gap < 1) {
        return 1;
    }

    return gap;
}

function combSort(auxillaryArray, animations) {
    let N = auxillaryArray.length;
    let gap = N;
    let swapped = true;

    while (gap != 1 || swapped == true) {
        gap = getNextGap(gap);
        swapped = false;

        for (let i = 0; i < N - gap; i++) {
            animations.push([i, i + gap]);
            animations.push([i, i + gap]);
            if (auxillaryArray[i] > auxillaryArray[i + gap]) {
                animations.push([i, auxillaryArray[i + gap]]);
                animations.push([i + gap, auxillaryArray[i]]);
                swap(auxillaryArray, i, i + gap);
                swapped = true;
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