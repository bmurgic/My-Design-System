import { NavBar } from './sections/NavBar.jsx'
import { HeroSection } from './sections/HeroSection.jsx'
import { ColorsSection } from './sections/ColorsSection.jsx'
import { TypographySection } from './sections/TypographySection.jsx'
import { ButtonsSection } from './sections/ButtonsSection.jsx'
import { CardsSection } from './sections/CardsSection.jsx'
import { FooterSection } from './sections/FooterSection.jsx'

export default function App() {
  return (
    <>
      {/* Noise texture overlay for depth/atmosphere */}
      <div className="noise-overlay" aria-hidden="true" />

      <NavBar />

      <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <ColorsSection />
        <TypographySection />
        <ButtonsSection />
        <CardsSection />
      </main>

      <FooterSection />
    </>
  )
}
