module.exports = function toReadable(number) {
    const fromZerotoTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    const fromOnetoNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const ty = ['zero', 'one', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number <= 20) {
        return fromZerotoTwenty[number];
    } else if (number >= 21 && number <= 29) {
        let toStringto = number.toString();
        let a = toStringto.split('');
        const second = a[1];
        return 'twenty ' + fromOnetoNine[second];
    } else if (number >= 31 && number <= 99 && number.toString()[1] != 0) {
        let toStringto = number.toString();
        let a = toStringto.split('');
        let splitedNumberfirst = a[0];
        let splitedNumbersecond = a[1];
        return ty[splitedNumberfirst] + ' ' + fromOnetoNine[splitedNumbersecond];
    } else if (number >= 30 && number <= 99 && number.toString()[1] == 0) {
        let toStringto = number.toString();
        let a = toStringto.split('');
        let splitedNumberfirst = a[0];
        return ty[splitedNumberfirst];
    } else if (number >= 100 && number <= 999 && number.toString()[1] == 0 && number.toString()[2] == 0) {
        let toStringto = number.toString();
        let a = toStringto.split('');
        let splitedNumberfirst = a[0];
        return fromOnetoNine[splitedNumberfirst] + ' ' + 'hundred';
    } else if (number >= 100 && number <= 999 && number.toString()[1] == 0) {
        let toStringto = number.toString();
        let a = toStringto.split('');
        let splitedNumberfirst = a[0];
        let splitedNumberthird = a[2];
        return fromOnetoNine[splitedNumberfirst] + ' ' + 'hundred' + ' ' + fromOnetoNine[splitedNumberthird];
    } else if (number >= 100 && number <= 999 && number.toString()[1] == 1) {
        let toStringto = number.toString();
        let a = toStringto.split('');
        let splitedNumberfirst = a[0];
        let splitedNumbersecond = a[1];
        let splitedNumberthird = a[2];
        let joinArr = splitedNumbersecond.concat(splitedNumberthird).toString();
        return fromOnetoNine[splitedNumberfirst] + ' ' + 'hundred' + ' ' + fromZerotoTwenty[joinArr];
    } else if (number >= 100 && number <= 999 && number.toString()[2] == 0) {
        let toStringto = number.toString();
        let a = toStringto.split('');
        let splitedNumberfirst = a[0];
        let splitedNumbersecond = a[1];
        return fromOnetoNine[splitedNumberfirst] + ' ' + 'hundred' + ' ' + ty[splitedNumbersecond];
    } else if (number >= 121 && number <= 999 && number.toString()[1] != 1 && number.toString()[2] != 0) {
        let toStringto = number.toString();
        let a = toStringto.split('');
        let splitedNumberfirst = a[0];
        let splitedNumbersecond = a[1];
        let splitedNumberthird = a[2];
        return fromOnetoNine[splitedNumberfirst] + ' ' + 'hundred' + ' ' + ty[splitedNumbersecond] + ' ' + fromOnetoNine[splitedNumberthird];
    }
}
