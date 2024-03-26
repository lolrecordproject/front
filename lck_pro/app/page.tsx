import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/home">
        <div
          className="
                    bg-gray2
                    p-3
                    font-semibold
                    "
        >
          홈화면으로 이동하기
        </div>
      </Link>
    </div>
  );
}
