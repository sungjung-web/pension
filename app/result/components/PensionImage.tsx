import Image from 'next/image';

interface Props {
  pensionYear: number;
}

export default function PensionImage({ pensionYear }: Props) {
  return (
    <div
      className="relative w-full"
      style={{
        boxShadow: '0px -1px 4px rgba(0, 19, 97, 0.06), 0px 4px 8px rgba(0, 19, 97, 0.1)',
        aspectRatio: '1.5',
        transform: 'rotate(1deg)',
        borderRadius: '4px',
      }}
    >
      <div
        className="absolute inset-2"
        style={{
          border: '1px solid #E9ECEF',
          padding: '4px',
        }}
      >
        <Image alt="article-image" src={getImageSource(pensionYear)} fill />
      </div>
    </div>
  );
}

function getImageSource(pensionYear: number) {
  return pensionYear === 0
    ? `/resources/pension/no/${getRandomNumber(5)}.png`
    : `/resources/pension/yes/${getRandomNumber(7)}.png`;
}

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max) + 1;
}
