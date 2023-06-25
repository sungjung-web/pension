import Spacing from "@/components/Spacing";
import Link from "next/link";

export default function CtaButtons() {
  return <>
    <button
      onClick={() => {
        navigator.share({
          title: '국민 연금 타이머',
          text: '나는 국민연금을 언제까지 받을 수 있을까',
          url: 'https://maeum.vercel.app/',
        });
      }}
      className="w-full h-14 rounded-xl text-center text-white"
      style={{ background: '#FF5A36'}}
    >
      결과 공유하기
    </button>
    <Spacing size={8} />
    <Link href='/'>
      <button
        className="w-full h-14 rounded-xl text-center"
        style={{ background: 'white', color: '1D1D1F'}}
      >
        연금 계산 다시하기
      </button>
    </Link>
  </>
}