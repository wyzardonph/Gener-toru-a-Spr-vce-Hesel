function generatePassword(length, includeNumbers, includeSpecialChars, includeUpperCase) {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecialChars) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    if (includeUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}
 
document.getElementById('generatePasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const length = parseInt(document.getElementById('passwordLength').value);
    const password = generatePassword(length);
    document.getElementById('generatedPassword').textContent = password;
});
 
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log("登入為：", username, "和密碼：", password);
});