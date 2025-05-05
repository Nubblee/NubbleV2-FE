import { Check } from 'lucide-react'

interface CheckboxProps {
  label?: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className='flex items-center gap-1.5 cursor-pointer'>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className='hidden'
      />
      <div
        className={`flex items-center justify-center w-5 h-5 rounded-sm border border-green-middle`}
      >
        {checked && <Check size={16} strokeWidth={3} color='var(--color-green-middle)' />}
      </div>

      {label && <span>{label}</span>}
    </label>
  )
}

export default Checkbox
