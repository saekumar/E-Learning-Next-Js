import { Button } from './ui/button'
interface IUploadImage {
  onClick?: () => void
}

const UploadImage: React.FC<IUploadImage> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="flex w-full flex-col bg-[#E8FFF4] min-h-[300px] justify-center items-center gap-2.5 border rounded-[26px] border-dashed border-[#3CDC94]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
      >
        <path
          d="M31.25 15.535H26.915C23.36 15.535 20.465 12.64 20.465 9.085V4.75C20.465 3.925 19.79 3.25 18.965 3.25H12.605C7.985 3.25 4.25 6.25 4.25 11.605V24.895C4.25 30.25 7.985 33.25 12.605 33.25H24.395C29.015 33.25 32.75 30.25 32.75 24.895V17.035C32.75 16.21 32.075 15.535 31.25 15.535ZM17.795 20.545C17.57 20.77 17.285 20.875 17 20.875C16.715 20.875 16.43 20.77 16.205 20.545L15.125 19.465V25.75C15.125 26.365 14.615 26.875 14 26.875C13.385 26.875 12.875 26.365 12.875 25.75V19.465L11.795 20.545C11.36 20.98 10.64 20.98 10.205 20.545C9.77 20.11 9.77 19.39 10.205 18.955L13.205 15.955C13.31 15.865 13.415 15.79 13.535 15.73C13.565 15.715 13.61 15.7 13.64 15.685C13.73 15.655 13.82 15.64 13.925 15.625C13.97 15.625 14 15.625 14.045 15.625C14.165 15.625 14.285 15.655 14.405 15.7C14.42 15.7 14.42 15.7 14.435 15.7C14.555 15.745 14.675 15.835 14.765 15.925C14.78 15.94 14.795 15.94 14.795 15.955L17.795 18.955C18.23 19.39 18.23 20.11 17.795 20.545Z"
          fill="#2FBA7C"
        />
        <path
          d="M26.6445 13.4657C28.0695 13.4807 30.0495 13.4807 31.7445 13.4807C32.5995 13.4807 33.0495 12.4757 32.4495 11.8757C30.2895 9.70072 26.4195 5.78572 24.1995 3.56572C23.5845 2.95072 22.5195 3.37072 22.5195 4.22572V9.46072C22.5195 11.6507 24.3795 13.4657 26.6445 13.4657Z"
          fill="#2FBA7C"
        />
      </svg>
      <p>Upload product by Browsing</p>
      <p>Drag or Drop the img</p>
    </Button>
  )
}

export default UploadImage
