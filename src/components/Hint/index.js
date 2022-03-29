const Hint = ({ title, content, children, color = 'orange', img, imgUrl, imgTitle }) => {
  content = content || children

  const imgStyle = {};
  if (img && img.endsWith('.svg')) {
    imgStyle.width = '1000px'
  }

  return (
    <div style={{ borderLeft: `0.5px solid ${color}`, padding: '0.5rem 2rem', marginTop: 0, marginBottom: '1.5rem' }}>
      <h3 style={{ color, marginBottom: 0 }}>{title}</h3>
      <p style={{ color: 'grey', marginTop: 5 }}>
        {content}
        {!!imgUrl && <>
          <br />
          <a href={imgUrl} title={imgTitle}>
            <img src={img} alt={imgTitle} style={imgStyle} loading="lazy" />
          </a>
        </>}
      </p>
    </div>
  )
}

export default Hint
