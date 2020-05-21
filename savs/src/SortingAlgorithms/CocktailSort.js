export function getCocktailSortAnimations(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    cocktailSort(auxillaryArray, animations);
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


function cocktailSort(auxillaryArray, animations) {
    let N = auxillaryArray.length;
    let swapped = true;
    let start = 0;
    let end = N - 1;
    while (swapped) {
        swapped = false;
        for (let i = start; i < end; i++) {
            animations.push([i, i + 1]);
            animations.push([i, i + 1]);
            if (auxillaryArray[i] > auxillaryArray[i + 1]) {
                animations.push([i, auxillaryArray[i + 1]]);
                animations.push([i + 1, auxillaryArray[i]]);
                swap(auxillaryArray, i, i + 1);
                swapped = true;
            }
            else {
                animations.push([-1, -1]);
                animations.push([-1, -1]);
            }
        }

        if (!swapped) {
            break;
        }

        swapped = false;
        --end;
        for (let i = end - 1; i >= start; i--) {
            animations.push([i, i + 1]);
            animations.push([i, i + 1]);
            if (auxillaryArray[i] > auxillaryArray[i + 1]) {
                animations.push([i, auxillaryArray[i + 1]]);
                animations.push([i + 1, auxillaryArray[i]]);
                swap(auxillaryArray, i, i + 1);
                swapped = true;
            }
            else {
                animations.push([-1, -1]);
                animations.push([-1, -1]);
            }
        }

        ++start;
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