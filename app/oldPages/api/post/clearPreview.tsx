const Preview = (req, res) => {
  res.clearPreviewData({})
  res.end('preview mode disabled') // optional
}

export default Preview
