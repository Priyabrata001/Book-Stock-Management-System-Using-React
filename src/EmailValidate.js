export function validateEmail(varifymail) {
    const emailPattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(varifymail)) {
        return true;
    }
    return false;
}