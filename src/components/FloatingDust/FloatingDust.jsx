import "./FloatingDust.css";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 17 + 7) % 100}%`,
  top: `${(index * 29 + 11) % 100}%`,
  size: `${2 + (index % 3)}px`,
  delay: `${(index % 6) * 1.1}s`,
  duration: `${7 + (index % 5)}s`,
}));

export default function FloatingDust() {
  return (
    <div className="floating-dust" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="dust-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}