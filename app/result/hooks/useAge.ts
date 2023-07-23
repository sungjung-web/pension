import { useParams, useSearchParams } from "next/navigation";

export function useAge() {
  const params = useSearchParams();
  return Number(params.get('age')) ?? 30;
}