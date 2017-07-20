document.getElementById('check-palindrome').addEventListener('click', function() {
    const text = document.getElementById('text-input').value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const isPalindrome = text === text.split('').reverse().join('');
    document.getElementById('result').innerText = isPalindrome ? "It's a palindrome!" : "Not a palindrome.";
});
