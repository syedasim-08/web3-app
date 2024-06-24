import { TypographyProps } from './interface'
import { getFontFamily, getFontSize } from './utils'


const Typography: React.FC<TypographyProps> = ({ variant = 'regular', size, className = '', children, tabIndex, onClick, }) => {
  const classNames = [variant && getFontFamily(variant), size && getFontSize(size), className].join(' ')
  return (
    <div className={classNames} tabIndex={tabIndex}  onClick={onClick}>
      {children}
    </div>
  )
}
export default Typography
