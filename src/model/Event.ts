import type { Dispatch, SetStateAction, MouseEvent } from 'react';
import type { ReplayLink } from './Replay';
import type { Tag } from './Tag';

export type EventTimeType = 'DATE' | 'RECRUIT';

export type EventType = {
  title: string;
  description: string;
  organizer: string;
  display_sequence: number;
  event_link: string;
  start_date_time: string | null;
  end_date_time: string | null;
  cover_image_link: string;
  tags: Tag[];
  use_start_date_time_yn?: 'Y' | 'N';
  use_end_date_time_yn?: 'Y' | 'N';
  event_time_type?: EventTimeType;
  links?: ReplayLink[];
};

export interface EventResponse extends EventType {
  id: number;
}

export interface EventErrorForm<T> {
  title: T;
  organizer: T;
  eventLink: T;
  replayLink?: T;
  tags: T extends string ? string[] : boolean;
}

export interface EventFormModel {
  title: string;
  changeTitle: (e: { target: { value: string } }) => void;
  error: EventErrorForm<boolean>;
  description: string;
  changeDescription: (e: { target: { value: string } }) => void;
  organizer: string;
  changeOrganizer: (e: { target: { value: string } }) => void;
  eventLink: string;
  changeEventLink: (e: { target: { value: string } }) => void;
  tags: string[];
  setTags: Dispatch<SetStateAction<Tag[]>>;
  eventTimeType: EventTimeType;
  changeEventTimeType: (e: MouseEvent, type: EventTimeType) => void;
  startDate: Date | null;
  changeStartDate: (date: Date | null) => void;
  startTime: Date | null;
  setStartTime: Dispatch<SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
  endTime: Date | null;
  setEndTime: Dispatch<SetStateAction<Date | null>>;
  coverImageUrl?: string;
  setBlob: Dispatch<SetStateAction<FormData | null>>;
  saveForm: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  isModify?: boolean;
}

export type EventRouter =
  | '/admin/event'
  | '/admin/replay'
  | '/admin/groups'
  | '/admin/event/tag'
  | '/admin/replay/tag';
