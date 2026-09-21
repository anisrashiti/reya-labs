import { studio } from '@/config/homepage';

export function PhilosophySection() {
  return (
    <div className="capability-philosophy" data-reveal>
      <h2 id="services-heading" className="philosophy-line">
        {studio.philosophy[0]} <span>{studio.philosophy[1]}</span>
      </h2>
    </div>
  );
}
