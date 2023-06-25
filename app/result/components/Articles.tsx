import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export default function Articles() {

  return <>
    {articleList.map((article) => <Article key={article.title} {...article} />)}
  </>
}


function Article({ title, href, date, image }: { title: string, href: string, date: Date, image: string }) {
  return (
    <Link href={href} target='_blank' className='flex gap-5 w-full'>
      <div className="flex gap-5 w-full" style={{ padding: '20px 0', boxShadow: '0px 1px 0px #E9ECEF' }}>
        <div className="flex flex-col justify-between">
          <p
            className="text-ellipsis line-clamp-2 break-keep"
            style={{ fontWeight: 600, fontSize: '15px', lineHeight: '22px' }}
          >
            {title}
          </p>
          <p style={{ fontWeight: 500, fontSize: '12px', lineHeight: '14px', color: '#868E96' }}>
            {format(date, 'yyyy.MM.dd')}
          </p>
        </div>
        <div className="relative shrink-0 rounded-lg overflow-hidden" style={{ width: '30%', aspectRatio: '1.6' }}>
          <Image alt="article-image" src={image} fill />
        </div>
      </div>
    </Link>
  );
}

const articleList = [
  { title:'빨라진 고갈시계에 다급한 국민연금', href: 'https://n.news.naver.com/mnews/article/215/0001104875', date: new Date('2023-05-31'), image: '/resources/7.jpg'},
  { title:'MZ 10명중 9명 "국민연금 고갈 불안"', href: 'https://n.news.naver.com/mnews/article/009/0005138641', date: new Date('2023-06-01'), image: '/resources/6.jpg'},
  { title:'"90년생 0원" 경고등 켜져도…눈치 보는 국회에 연금개혁 \'공회전\'', href: 'https://n.news.naver.com/mnews/article/008/0004885252', date: new Date('2023-05-10'), image: '/resources/1.jpg'},
]