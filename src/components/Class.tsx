type Props = {
    name: string;
    desc?: string;
    img: string;
}

export default function Class({name , desc, img}: Props) {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className="absolute p-5 z-30 flex flex-col h-[380px] w-[450px] items-center justify-center whitespace-normal bg-primary-500 text-white  text-center opacity-0 transition duration-500 hover:opacity-90">
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{desc}</p>
        </div>
        <img src={img} alt="" />

    </li>
  )
}