import { FadeUp } from './Reveal'

export default function SectionHeader({ label, title }) {
  return (
    <>
      <FadeUp>
        <h2 className="text-sm">{label}</h2>
      </FadeUp>
      <br />
      <FadeUp>
        <h2 className="font-bold">{title}</h2>
      </FadeUp>
      <br />
    </>
  )
}
