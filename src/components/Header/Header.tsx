'use client';

import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = () => setMobileOpen(false);

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
                <div className={styles.headerInner}>
                    <a href="#hero" className={styles.logo}>
                        AWATAR9
                    </a>

                    <nav className={styles.nav}>
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href} className={styles.navLink}>
                                {link.label}
                            </a>
                        ))}
                        <a href="#contact" className={styles.ctaButton}>
                            Let&apos;s Talk
                        </a>
                    </nav>

                    <button
                        className={`${styles.mobileToggle} ${mobileOpen ? styles.open : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            <div className={`${styles.mobileNav} ${mobileOpen ? styles.open : ''}`}>
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={styles.mobileNavLink}
                        onClick={handleNavClick}
                    >
                        {link.label}
                    </a>
                ))}
                <a href="#contact" className={styles.ctaButton} onClick={handleNavClick}>
                    Let&apos;s Talk
                </a>
            </div>
        </>
    );
}
