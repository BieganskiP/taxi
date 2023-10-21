import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.png" width={200} height={60} alt="Mini Serce Logo" />
    </Link>
  );
}
