import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/home">
        <div
          className="
                    bg-white
                    h-screen
                    p-3
                    font-semibold
                    "
        >
          헬스장 8시 ㄱㄱ
        </div>
      </Link>
    </div>
  );
}
