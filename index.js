let numberArr = [];
getDataForm = () => {
    if (document.getElementById("number").value == "") {
        return;
    }
    let number = document.getElementById("number").value * 1;
    numberArr.push(number);
    document.getElementById("number").value = "";
    document.getElementById("result-numbers").innerHTML = numberArr;
};
//Tổng số dương
sumPositive = () => {
    sum = 0;
    numberArr.forEach((item) => {
        if (item > 0) {
            sum += item;
        }
    })
    document.getElementById("result-sum-positive").innerHTML = sum;
};
//Đếm số dương
numberPositive = () => {
    let count = 0;
    numberArr.forEach((item) => {
        if (item > 0) {
            count++;
        }
    })
    document.getElementById("result-count-positive").innerHTML = count;
};
//Số nhỏ nhất
findMinNumber = () => {
    min = numberArr[0];
    numberArr.forEach((item) => {
        if (item < min) {
            min = item;
        }
    })
    document.getElementById("resutl-min").innerHTML = min;
};
//Số dương nhỏ nhất
findMinPositive = () => {
    min = numberArr[0];
    numberArr.forEach((item) => {
        if (item > 0 && item < min) {
            min = item;
        }
    })
    document.getElementById("resutl-min-positive").innerHTML = min;
};
//Số chẵn cuối cùng
findLastNumber = () => {
    lastNumber = -1;
    numberArr.forEach((item) => {
        if (item % 2 == 0) {
            lastNumber = item;
        } else {
            lastNumber = lastNumber;
        }
    })
    document.getElementById("result-last").innerHTML = lastNumber;
};
//Đổi chỗ
swapNumber = (numberArr) => {
    let index1 = document.getElementById("index1").value * 1;
    let index2 = document.getElementById("index2").value * 1;
    let temp = numberArr[index1];
    numberArr[index1] = numberArr[index2];
    numberArr[index2] = temp;
    document.getElementById("result-swap").innerHTML = numberArr;
}
//Sắp xếp tăng dần
numberUp = (numberArr) => {
    let arr = numberArr.sort((a, b) => a - b);
    console.log(arr);
    document.getElementById("result-up").innerHTML = arr;

};
// Tìm số nguyên tố đầu tiên
isPrime = (num) => {
    if(num < 2) return false;
    for(let i = 2; i<=Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}
findFirstPrime = (numberArr) => {
    let firstPrime = -1;
    for (let i = 0; i < numberArr.length; i++) {
        if (isPrime(numberArr[i])) {
            firstPrime = numberArr[i];
        }else{
            firstPrime = firstPrime;
        }
    }
    document.getElementById("result-firstPrime").innerHTML = firstPrime;
}
// Đếm số nguyên
countIntegers = () => {
    let count = 0;
    numberArr.forEach((item) => {
        if(Number.isInteger(item)) {
            count++;
        }
    })
    document.getElementById("result-countIntegers").innerHTML = count;
}
// So sánh số lượng âm và dương
countPositiveAndNegative = () => {
    let positiveCount = 0;
    let negativeCount = 0;
    numberArr.forEach((item) => {
        if(item > 0) {
            positiveCount++;
        }else if(item < 0) {
            negativeCount++;
        }
    })
    let soSanh = "";
    if(positiveCount > negativeCount ){
        soSanh = "Số dương > Số âm";
    }else if(positiveCount < negativeCount){
        soSanh = "Số âm > Số dương";
    }else{
        soSanh = "Số âm = Số dương";
    }
    document.getElementById("result-sosanh").innerHTML = soSanh;
}
submit = () => {
    getDataForm();
    numberPositive();
    sumPositive();
    findMinNumber();
    findMinPositive();
    findLastNumber();
    swapNumber(numberArr);
    numberUp(numberArr);
    findFirstPrime(numberArr);
    countIntegers();
    countPositiveAndNegative();
}