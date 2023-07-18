import ResizableAvatar from "./Resizeable"
const Avatar = ({img, setpage}) => {
  return (
    <form>
        <button onClick={()=> setpage("info")} className="block bg-blue-500 text-white mt-8 p-2 text-xl mb-8">Go back</button>
        <img src={img} alt="Upload Image" />
        <ResizableAvatar />
    </form>
  )
}

export default Avatar