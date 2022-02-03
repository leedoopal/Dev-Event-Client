import cookie from 'cookie';
import Headers from '../../../config/headers';

/** refresh token 발급 */
export const getRefreshTokenApi = async (cookies: string | undefined) => {
  if (cookies) {
    return await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/token/refresh`, {
      method: 'POST',
      headers: {
        Authorization: cookie.parse(cookies)['refresh-token'],
        ...Headers,
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
  }

  return { error: { message: 'refresh-token을 넣어주세요' } };
};
