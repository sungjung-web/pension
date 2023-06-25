'use client';
import Spacing from '@/components/Spacing';
import { getPensionYears } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import CtaButtons from '../../components/CtaButtons';
import Articles from '../../components/Articles';

interface Props {
  params: { age: string };
}

export default function Age(props: Props) {
  const age = props.params.age;
  const pensionYear = getPensionYears(Number(age))

  return (
    <>
      {pensionYear !== 0 ? 
      <>
        <h1 className="text-center" style={{ fontSize: '22px', fontWeight: 600, lineHeight: '26px', color: '#1D1D1F' }}>
          당신은 국민연금을
        </h1>
        <Spacing size={4} />
        <h1 className="text-center" style={{ fontSize: '28px', fontWeight: 900, lineHeight: '34px', color: '#1D1D1F' }}>
          {pensionYear}년 동안 받을 수 있습니다.
        </h1>
      </> : 
      <>
        <h1 className="text-center" style={{ fontSize: '22px', fontWeight: 600, lineHeight: '26px', color: '#1D1D1F' }}>
          당신은 국민연금을
        </h1>
        <Spacing size={4} />
        <h1 className="text-center" style={{ fontSize: '28px', fontWeight: 900, lineHeight: '34px', color: '#1D1D1F' }}>
          평생 받을 수 없습니다.
        </h1>
      </>}

      <Spacing size={28} />
      <div
        className="relative w-full"
        style={{
          boxShadow: '0px -1px 4px rgba(0, 19, 97, 0.06), 0px 4px 8px rgba(0, 19, 97, 0.1)',
          aspectRatio: '1.5',
          transform: 'rotate(1deg)',
        }}
      >
        <div
          className='absolute inset-2'
          style={{
          border: '1px solid #E9ECEF',
          boxShadow: '0px 4px 8px 0px #0013611A',
          padding: '4px'
        }}>
          <Image alt="article-image" src={pensionYear === 0 ? "/resources/3.png": '/resources/4.png'} fill />
        </div>
      </div>

      <Spacing size={44} />
      <p
        style={{
          fontSize: '19px',
          fontWeight: 600,
          color: '#1D1D1F',
          lineHeight: '28px',
          textAlign: 'center',
        }}
      >
        우리나라의 국민연금은
        <br />
        <span style={{ color: '#FF5A36' }}>2055년</span>에 고갈될 예정입니다.
      </p>

      <Spacing size={24} />
      <Articles />


      <Spacing size={24} />
      <Link href={newsLink} target='_blank'>
        <button 
          className="py-4 px-6 rounded-full overflow-hidden" style={{ background: '#F1F3F5' }}
        >
          <p style={{ fontWeight: 500, fontSize: '14px', lineHeight: '17px', color: '#1D1D1F' }}>관련 기사 더보기</p>
        </button>
      </Link>

      <Spacing size={48} />
      <CtaButtons />
    </>
  );
}


const newsLink = 'https://search.naver.com/search.naver?sm=tab_hty.top&where=news&query=%EA%B5%AD%EB%AF%BC+%EC%97%B0%EA%B8%88+%EA%B3%A0%EA%B0%88&oquery=%EA%B5%AD%EB%AF%BC+%EC%97%B0%EA%B8%88'