import Cookies from 'js-cookie';




export const setTokenCookie = (token:string,_id:string) => {
  // Thiết lập cookie với tên 'token' và giá trị là token được truyền vào
if (Cookies.get('token') || Cookies.get('user')) {
  Cookies.remove('token')
  Cookies.remove('user')
}
  Cookies.set('token', token, { expires: 1 }); // 'expires' là thời gian sống của cookie (ví dụ: 7 ngày)
  Cookies.set('user', _id, { expires: 1 });
  };
  export const getTokenCookie = () => {
    return Cookies.get('token')
  }

