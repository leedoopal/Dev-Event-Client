import cookie from 'cookie';
import { Headers } from '../../../config/headers';
import type { RequestHeaders } from '../../../model/Request';
import type { EventModel } from '../../../model/Event';

export const createEventsApi = async ({ data }: { data: EventModel }) => {
  return await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: cookie.parse(document.cookie)['access_token'],
      ...Headers(),
    } as RequestHeaders,
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
