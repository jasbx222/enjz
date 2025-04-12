

import { ArrowDownLeftFromSquareIcon, StopCircle, Users } from 'lucide-react';
const dataCard =[
    {
        title:'المحتوى',
        number:'120',
        icon:<ArrowDownLeftFromSquareIcon size={40}/>
    },
    {
        title:'المستخدمين',
        number:'160',
        icon:<Users size={40}/>
    },
    {
        title:'المتوقفين',
        number:'30',
        icon:<StopCircle size={40}/>
    },
]
const Card = () => {
  return (
    <div className="flex justify-evenly  flex-wrap gap-5 items-center">
        {
            dataCard.map((i)=>(
      
                  <div key={i.title} className="bg-gradient-to-r from-[#001976] to-[#004aad] w-[320px] h-[250px] text-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-5">
      {/* معلومات المستخدم */}
      <div className=" block w-full gap-5 relative top-[70px]">
        <div className=" flex justify-center items-center  "  style={{marginBottom:'20px'}}>
          {i.icon}
       
        </div>

        <h2 className="text-2xl mt-5 font-extrabold text-white text-center tracking-wide">
          {i.title}
        </h2>

        <p className={`mt-2 text-sm font-medium  text-center`}>{i.number}</p>
      </div>
    </div>

            ))
        }
    </div>
  );
};

export default Card;
