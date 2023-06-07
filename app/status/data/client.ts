const Data = (_gpuTier: any) => {
  return {
    name: 'app',
    contents: [
      {
        isHeader: false,
        name: 'GPU',
        value: _gpuTier?.gpu,
        className: 'uppercase',
      },
    ],
  }
}

export default Data
