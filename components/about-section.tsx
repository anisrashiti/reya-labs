import { studio } from '@/config/homepage';
import { Wordmark } from './wordmark';

export function AboutSection() {
  return (
    <div className="reya-story">
      <div className="brand-atmosphere" aria-hidden="true" />
      <div className="reya-wordmark" data-reveal>
        <span className="micro">A name. A point of view. / From Kosovo</span>
        <Wordmark />
      </div>
      <div className="reya-story-grid">
        <div className="name-story" data-reveal>
          <span className="micro">Behind the name</span>
          <p>
            REYA is inspired by <span lang="sq">“reja”</span>,<br />
            the Albanian word for cloud.
          </p>
        </div>
        <div className="about-body" data-reveal>
          <p>{studio.about}</p>
          <span className="micro">Clear thinking. Solid execution.</span>
        </div>
      </div>
    </div>
  );
}
