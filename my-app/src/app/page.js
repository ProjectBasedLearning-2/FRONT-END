
import Button from "./Accesories/Button";
import Title from "./Accesories/Title";
import Logo from "./Logo";

export default function Home() {
  
  return (
    <>
      <div>
        <Logo />
        <img
          src="https://img.freepik.com/free-photo/view-graphic-3d-tractor_23-2150849079.jpg?size=626&ext=jpg&ga=GA1.1.1299523950.1706704366&semt=sph"
          className="absolute right-5 w-[605px] h-[660px] rounded-[30px] top-[20px] bottom-[0px] "
        ></img>
        <div className='flex gap-[20px] absolute right-[50px] top-[40px] '>
          <Button title="PROJECT INFO" goto="/Project"></Button>
          <Button title="ABOUT US" goto="/Aboutus" ></Button>
        </div>
        <Title></Title>
      </div>
    </>
  );
}
