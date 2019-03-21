export function storeToken (token) {
  try {
    localStorage.setItem('spark_token', token);
  } catch (e) {
    console.error(e);
  }
}

export function storeUserId (user_id) {
  try {
    localStorage.setItem('spark_user_id', user_id.toString());
  } catch (e) {
    console.error(e);
  }
}
