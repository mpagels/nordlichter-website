import Link from "next/link";

export default function NavLink({ path, label }) {
  return <Link href={path}>{label.toUpperCase()}</Link>;
}
