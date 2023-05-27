const Preview = (req, res) => {
  res.setPreviewData({})
  res.redirect(req.query.route)
}

export default Preview
