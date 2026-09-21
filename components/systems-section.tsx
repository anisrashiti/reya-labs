import { studio } from '@/config/homepage';
import type { CSSProperties } from 'react';

// The lines and label anchors use the same coordinates in each layout.
const desktop = [
  [10, 50],
  [35, 50],
  [72, 12.5],
  [72, 37.5],
  [72, 62.5],
  [72, 87.5],
];
const mobile = [
  [15, 18],
  [60, 18],
  [27, 44],
  [27, 59],
  [27, 74],
  [27, 89],
];

function Connections({ compact = false }: { compact?: boolean }) {
  const points = compact ? mobile : desktop;
  const [business, platform, , , data, last] = points;
  const bus = compact ? 15 : 58;
  const lead = compact
    ? `M${platform[0]} ${platform[1]}V31H${bus}V${last[1]}`
    : `M${platform[0]} ${platform[1]}H${bus}M${bus} ${points[2][1]}V${last[1]}`;
  const branches = points
    .slice(2)
    .map(([x, y]) => `M${bus} ${y}H${x}`)
    .join('');
  const highlighted = compact
    ? `M${business[0]} ${business[1]}H${platform[0]}V31H${bus}V${data[1]}H${data[0]}`
    : `M${business[0]} ${business[1]}H${bus}V${data[1]}H${data[0]}`;
  return (
    <svg
      className={`system-lines system-lines-${compact ? 'mobile' : 'desktop'}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        vectorEffect="non-scaling-stroke"
        d={`M${business[0]} ${business[1]}H${platform[0]}${lead}${branches}`}
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="system-route"
        d={highlighted}
      />
    </svg>
  );
}

export function SystemsSection() {
  return (
    <div className="systems-proof">
      <div className="systems-intro" data-reveal>
        <p className="micro">Beyond the interface</p>
        <h3>
          From interface
          <br />
          <span>to system.</span>
        </h3>
        <p>{studio.systemsDescription}</p>
      </div>
      <figure
        className="systems-diagram"
        data-reveal
        aria-label="Business connects to Platform. Platform connects to Users, Operations, Data and Automation."
      >
        <div className="diagram-register micro">
          <span>One connected system</span>
          <span>REYA / Architecture</span>
        </div>
        <div className="system-map">
          <Connections />
          <Connections compact />
          <ol className="system-nodes">
            {studio.nodes.map((node, index) => (
              <li
                className={`system-node ${index < 2 ? 'system-origin' : 'system-branch'}`}
                key={node}
                style={
                  {
                    '--node-x': `${desktop[index][0]}%`,
                    '--node-y': `${desktop[index][1]}%`,
                    '--node-mobile-x': `${mobile[index][0]}%`,
                    '--node-mobile-y': `${mobile[index][1]}%`,
                  } as CSSProperties
                }
              >
                <i aria-hidden="true" />
                <div className="system-node-copy">
                  <span className="micro">0{index + 1}</span>
                  <span>{node}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <figcaption className="diagram-caption">
          A clear experience on the surface. Everything working together
          underneath.
        </figcaption>
      </figure>
    </div>
  );
}
