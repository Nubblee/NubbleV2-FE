// 이메일 유효성 정규식
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//이메일 유효성 검사
export const isValidEmail = (email: string) => {
  return emailRegex.test(email);
};

//이메일 유효성 메시지
export const invalidEmailMessage = (email: string) => {
  return email.trim().length !== 0 && !isValidEmail(email)
    ? "올바른 이메일을 입력해주세요."
    : "";
};

// 비밀번호 유효성 정규식
const passwordRegex = /^[A-Za-z0-9@$!%*?&]+$/;

//비밀번호 유효성 검사
export const isValidPassword = (password: string) => {
  return passwordRegex.test(password) && password.length >= 8;
};

//비밀번호 유효성 메시지
export const invalidPWDMessage = (password: string) => {
  return password.trim().length !== 0 && !isValidPassword(password)
    ? "비밀번호는 8글자 이상이어야 하고 특수문자와 숫자를 포함해야 합니다."
    : "";
};

// 비밀번호 일치 확인
export const isPasswordMatch = (password: string, checkPassword: string) =>
  password === checkPassword;

// 비밀번호 일치 확인/오류 메시지
export const isEqualPwdMessage = (
  password: string,
  checkPassword: string
): { validCheckPwdMessage: string; invalidCheckPwdMessage: string } => {
  if (checkPassword.trim().length === 0) {
    return { validCheckPwdMessage: "", invalidCheckPwdMessage: "" };
  }

  const isMatch = isPasswordMatch(password, checkPassword);

  return {
    validCheckPwdMessage: isMatch ? "비밀번호가 일치합니다" : "",
    invalidCheckPwdMessage: !isMatch ? "비밀번호가 일치하지 않습니다" : "",
  };
};
