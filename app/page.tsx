'use client';
import Spacing from '@/components/Spacing';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { match } from 'ts-pattern';
import Loading from './components/Loading';

export default function Home() {
  const router = useRouter();
  const testGroup = getABTestGroup();
  const [age, setAge] = useState<string>();

  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <Loading
        onFinished={() => {
          router.push(`/result/${testGroup}?age=${age}`);
        }}
      />
    );
  }

  return (
    <>
      <Spacing size={50} />
      <h1 className="font-black text-2xl text-center whitespace-pre-wrap">
        {match(testGroup)
          .with('a', () => '나는 국민연금을\n얼마나 돌려받을 수 있을까?')
          .with('b', () => '나는 국민연금을\n언제까지 받을 수 있을까?')
          .otherwise(() => '나는 국민연금을\n언제까지 받을 수 있을까?')}
      </h1>
      <Spacing size={12} />
      <p className="font-bold text-center" style={{ color: '#868E96' }}>
        by team MAEUM
      </p>
      <Spacing size={50} />
      <div className="w-full flex flex-column gap-2">
        <div className="w-full relative aspect-square">
          <Image fill alt="기영이 할머니" src="/resources/grand.png" />
        </div>
        <div className="w-full relative aspect-square">
          <Image fill alt="기영이 할머니" src="/resources/grand.png" />
        </div>
        <div className="w-full relative aspect-square">
          <Image fill alt="기영이 할머니" src="/resources/grand.png" />
        </div>
      </div>
      <Spacing size={20} />
      <div className="w-full flex flex-column gap-1">
        <div className="w-full relative aspect-square">
          <Image fill alt="기영이 할머니" src="/resources/grand.png" />
        </div>
        <div className="w-full relative aspect-square">
          <Image fill alt="기영이 할머니" src="/resources/grand.png" />
        </div>
        <div className="w-full relative aspect-square">
          <Image fill alt="기영이 할머니" src="/resources/grand.png" />
        </div>
      </div>
      <Spacing size={64} />
      <input
        value={age}
        onChange={e => setAge(e.target.value)}
        placeholder="당신의 현재 나이 입력"
        className="w-full h-14 rounded-xl text-center"
        type="number"
        style={{ background: '#F1F3F5' }}
      />
      <Spacing size={24} />
      <button
        onClick={() => {
          setLoading(true);
        }}
        className="w-full h-14 rounded-xl text-center text-white"
        style={{ background: '#FF5A36' }}
      >
        알아보기
      </button>
    </>
  );
}

function getABTestGroup(): 'a' | 'b' {
  var randomValue = Math.random(); // 0 이상 1 미만의 임의의 소수값 생성

  if (randomValue < 0.5) {
    return 'a';
  } else {
    return 'b';
  }
}
