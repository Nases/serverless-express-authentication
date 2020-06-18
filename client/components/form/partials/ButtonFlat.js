const ButtonFlat = (props) => {
  return (
    <a {...props} href="#" className="inline-flex items-center font-semibold uppercase hover:text-primary h-10 px-3 py-2 text-sm leading-4 text-common-dark transition ease-in-out duration-150">
      {props.children}
    </a >
  )
}

export default ButtonFlat