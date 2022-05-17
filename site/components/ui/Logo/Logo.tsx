import Image from 'next/image'

const Logo = ({ width = '32px', height = '32px', ...props }) => (
  <Image
    src="/icon.png"
    width={width}
    height={height}
    {...props}
    alt="Brezg Logo"
  />
)

export default Logo
