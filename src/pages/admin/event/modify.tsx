import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import getToken from '../../../server/api/auth/getToken';
import { getEventApi } from '../../api/events';
import { getTagsApi } from '../../api/events/tag';
import { useUpdateCookie } from '../../../util/use-cookie';
import EventComponent from '../../../components/Event';
import EventModifyForm from '../../../components/event/Modify';
import type { NextPageContext } from 'next/types';
import type { TokenModel } from '../../../model/User';
import type { EventResponseModel } from '../../../model/Event';
import type { Tag } from '../../../model/Tag';

const queryClient = new QueryClient();

const EventModify = ({ token }: { token: TokenModel }) => {
  const { query } = useRouter();
  const [event, setEvent] = useState<EventResponseModel>();
  const [tags, setTags] = useState<Tag[]>([]);

  const data = async () =>
    await getEventApi({ token, id: query.id?.toString() || '' });

  const tagsData = async () => await getTagsApi();

  useEffect(() => {
    if (token?.access_token) useUpdateCookie(document, token);

    // https://github.com/vercel/next.js/discussions/20641?sort=new
    // vercel 배포 후 500 에러 이슈로 인해 useEffect 내부에서 호출하도록 수정
    data().then((res) => setEvent(res));
    tagsData().then((res) => setTags(res));
  }, []);

  if (!event) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <EventComponent title="개발자 행사 수정">
        <EventModifyForm event={event} tags={tags} />
      </EventComponent>
    </QueryClientProvider>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const cookies = context.req?.headers.cookie;
  const token = await getToken(cookies);
  const { id = '' } = context.query;

  // token이 없거나 에러나면 로그인 페이지로 이동
  if (!token?.data || token?.error) {
    return {
      redirect: {
        destination: '/auth/signIn',
      },
    };
  }

  // id가 없다면 이벤트 조회 페이지로 이동
  if (!id) return { redirect: { destination: '/admin/event' } };
  return { props: { token: token.data } };
};

export default EventModify;
