function checkPalindrome(){
    const str =
    document.getElementById('inputString'). value;
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
    let isPalindrome = true;

    for( let i= 0; i< cleanedStr.lenght/ 2; i++){
        if (cleanedStr[i] !== cleanedStr[cleanedStr.lenght - 1 -i]){
            isPalindrome = false;
            break;
        }
    }

    document.getElementById('result').innerText = isPalindrome ? 'its a palindrome' : ' its not a palindrome';
}