import { navigation } from '@/config/navigation';
import { Wordmark } from './wordmark';

export function Footer({ fromProject = false }: { fromProject?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a
          className="footer-brand"
          href={fromProject ? '/' : '#main-content'}
          aria-label="REYA Labs home"
        >
          <Wordmark />
          <span>LABS</span>
        </a>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <a href={`${fromProject ? '/' : ''}${item.href}`} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 REYA Labs</span>
        <span>Based in Kosovo</span>
        <a href={fromProject ? '/' : '#main-content'}>Back to top ↑</a>
      </div>
    </footer>
  );
}
