const SectionHeading = ({ eyebrow, title, description, center = false }) => {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-stone-600">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
