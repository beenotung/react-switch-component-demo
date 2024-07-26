import './Switch.css'

export function Switch(props: {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}) {
  function toggle() {
    props.onChange?.(!props.checked)
  }
  return (
    <div
      className={
        'Switch' +
        (props.checked ? ' checked' : '') +
        (props.disabled ? ' disabled' : '') +
        (props.size ? ' size--' + props.size : '')
      }
      onClick={props.disabled ? undefined : toggle}
    >
      <div className="Switch--status-text--on">Before</div>
      <div className="Switch--toggle"></div>
      <div className="Switch--status-text--off">After</div>
    </div>
  )
}
