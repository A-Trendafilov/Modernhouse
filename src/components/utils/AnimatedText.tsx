import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const AnimatedText = () => {
  const { t } = useTranslation()
  const phrases = [t('common.animatedText1'), t('common.animatedText2')]
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((previous) => (previous + 1) % phrases.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [phrases.length])

  const letterAnimation: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.04, duration: 0.4, ease: 'easeOut' },
    }),
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
  }

  return (
    <div
      className="flex font-display text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.15em] text-gradient"
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentPhrase}-${phrases[currentPhrase]}`}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex"
        >
          {phrases[currentPhrase].split('').map((letter, index) =>
            letter === ' ' ? (
              // biome-ignore lint/suspicious/noArrayIndexKey: letters of a fixed string, position is the identity
              <span key={`space-${index}`} className="w-2" />
            ) : (
              <motion.span
                // biome-ignore lint/suspicious/noArrayIndexKey: letters of a fixed string, position is the identity
                key={`${currentPhrase}-${index}`}
                custom={index}
                variants={letterAnimation}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ),
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedText
