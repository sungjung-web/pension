interface Props {
  size: number;
  direction?: 'horizontal' | 'vertical';
}

export default function Spacing({ size, direction = 'vertical' }: Props) {
  if (direction === 'horizontal') {
    return <div style={{ width: `${size}px`, height: '1px' }} />;
  }

  return <div style={{ height: `${size}px`, width: '1px' }} />;
}
