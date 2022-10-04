const getBackGround = (code?: number) => {
  switch (code) {
    case 1:
      return '#607d8b'
    case 2:
      return '#546e7a'
    case 3:
      return '#455a64'
    case 4:
      return '#37474f'
    default:
      return '#222'
  }
}

export { getBackGround }
