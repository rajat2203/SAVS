export function getShellSortAnimations(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    shellSort(auxillaryArray, animations);
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

function shellSort(auxillaryArray, animations) {
    let N = auxillaryArray.length;

    for (let gap = Math.floor(N / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < N; i++) {
            animations.push(["comparision1", gap, i]);
            animations.push(["comparision2", gap, i]);
            let temp = auxillaryArray[i];
            let j;
            for (j = i; j >= gap && auxillaryArray[j - gap] > temp; j -= gap) {
                animations.push(["overwrite", j, auxillaryArray[j - gap]]);
                auxillaryArray[j] = auxillaryArray[j - gap];
                if (j >= 0) {
                    animations.push(["comparision1", j, i]);
                    animations.push(["comparision2", j, i]);
                }
            }
            animations.push(["overwrite", j, temp]);
            auxillaryArray[j] = temp;
        }
    }

    finalarray(auxillaryArray, animations);
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