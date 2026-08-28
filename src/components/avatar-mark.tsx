export function AvatarMark({ className = "avatar-mark" }: { className?: string }) {
  return (
    <img
      src="/avatar.png"
      alt="Ultra Dbg"
      className={className}
    />
  );
}
