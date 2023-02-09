import classNames from 'classnames';
import type { EventFormModel } from '../../../../model/Event';
import Input from '../../../atoms/input/Input';
import ErrorContext from '../../../layouts/ErrorContext';
import DatePicker from '../../../molecules/datepicker/Date';
import TimePicker from '../../../molecules/datepicker/Time';
import ImageUploadComponent from '../../ImageUpload';
import Tag from './Tag';

const FormContent = ({
  title,
  changeTitle,
  error,
  description,
  changeDescription,
  organizer,
  changeOrganizer,
  eventLink,
  changeEventLink,
  tags,
  setTags,
  eventTimeType,
  changeEventTimeType,
  startDate,
  changeStartDate,
  startTime,
  setStartTime,
  endDate,
  setEndDate,
  endTime,
  setEndTime,
  coverImageUrl,
  setBlob,
  saveForm,
  isModify = false,
}: EventFormModel) => {
  return (
    <form className="form--large">
      <div className="form__content">
        <Input
          text="제목"
          value={title}
          onChange={changeTitle}
          isRequired={true}
          customClass={{ 'border-red-400': error.title }}
        >
          {error.title && <ErrorContext />}
        </Input>
        <div className="form__content">
          <Input
            text="행사 설명"
            value={description}
            onChange={changeDescription}
          />
        </div>
        <div className="form__content">
          <Input
            text="주최"
            value={organizer}
            onChange={changeOrganizer}
            isRequired={true}
            customClass={{ 'border-red-400': error.organizer }}
          >
            {error.organizer && <ErrorContext />}
          </Input>
        </div>
        <div className="form__content">
          <Input
            text="행사 링크"
            value={eventLink}
            onChange={changeEventLink}
            isRequired={true}
            autoComplete="off"
            customClass={{ 'border-red-400': error.eventLink }}
          >
            {error.eventLink && <ErrorContext />}
          </Input>
        </div>
        <Tag tags={tags} setTags={setTags}>
          {error.tags && <ErrorContext />}
        </Tag>
        <div className="form__content__input">
          <span className="form__content__title inline-block text-base text-gray-600">
            시간 유형
          </span>
          <button
            onClick={(e) => changeEventTimeType(e, 'DATE')}
            className={classNames(
              'border-solid border border-gray-300 rounded py-2 px-6 text-sm text-gray-600 mr-2',
              { 'border-blue-500': eventTimeType === 'DATE' }
            )}
          >
            일시
          </button>
          <button
            onClick={(e) => changeEventTimeType(e, 'RECRUIT')}
            className={classNames(
              'border-solid border border-gray-300 rounded py-2 px-6 text-sm text-gray-600',
              { 'border-blue-500': eventTimeType === 'RECRUIT' }
            )}
          >
            모집
          </button>
        </div>
        <div
          className={classNames('mb-6 flex items-center', {
            'mt-8': tags?.length && !isModify,
          })}
        >
          <span className="form__content__title inline-block text-base text-gray-600">
            시작 일자
          </span>
          <DatePicker selected={startDate} onChange={changeStartDate} />
          <div className="w-full inline-flex items-center justify-center">
            <span className="w-20 inline-block text-base text-gray-600">
              시작 시간
            </span>
            <TimePicker selected={startTime} onChange={setStartTime} />
          </div>
        </div>
        <div className="mb-6 flex items-center">
          <span className="form__content__title inline-block text-base text-gray-600">
            종료 일자
          </span>
          <DatePicker
            selected={endDate}
            onChange={setEndDate}
            minDate={startDate}
          />
          <div className="w-full inline-flex items-center justify-center">
            <span className="w-20 inline-block text-base text-gray-600">
              종료 시간
            </span>
            <TimePicker selected={endTime} onChange={setEndTime} />
          </div>
        </div>
        <div className="my-8" />
        <div>
          <span className="form__content__title inline-block text-base text-gray-600">
            대표 이미지
          </span>
          <ImageUploadComponent
            coverImageUrl={coverImageUrl}
            setBlob={setBlob}
          />
        </div>
      </div>
      <div className="relative pt-8 pb-6">
        <button
          type="submit"
          onClick={saveForm}
          className="form__button form__button--center w-20 inline-flex items-center justify-center my-4 p-2 rounded-md text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          확인
        </button>
        <a
          href={'/admin/event'}
          className="form__button form__button--right w-20 inline-flex items-center justify-center my-4 p-2 rounded-md text-gray-400 text-white bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          취소
        </a>
      </div>
    </form>
  );
};

export default FormContent;
