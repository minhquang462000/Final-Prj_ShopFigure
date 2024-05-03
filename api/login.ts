import Cookies from 'js-cookie';




export const setTokenCookie = (token:string) => {
    // Thiết lập cookie với tên 'token' và giá trị là token được truyền vào
    Cookies.set('token', token, { expires: 1 }); // 'expires' là thời gian sống của cookie (ví dụ: 7 ngày)
  };


