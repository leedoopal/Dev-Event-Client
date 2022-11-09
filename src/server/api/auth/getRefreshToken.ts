import Cookie from 'cookie';
import { Headers } from '../../../config/headers';
import type { RequestHeaders } from '../../../model/Api';

/** refresh token 발급 */
export const getRefreshTokenApi = async (cookies: string | undefined) => {
  if (!cookies) return { error: { message: 'refresh_token을 넣어주세요' } };

  return await fetch(`${process.env.NEXT_PUBLIC_ADMIN_V1_URL}/token/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...Headers(),
    } as RequestHeaders,
    body: JSON.stringify({
      refresh_token: Cookie.parse(cookies)['refresh_token'],
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
