import ML from '../assets/m.png'
import Python from '../assets/Python.png'
import Pandas from '../assets/pandas.png'
import MySQL from '../assets/mysql.png'
import Numpy from '../assets/Numpy.png'
import PowerBI from '../assets/powerbi.png'
import Tableau from '../assets/Tableau.png'
import MongoDB from '../assets/mongo.png';


const Skills = () => {
  return (
    <div name='skills'className=' w-full h-screen bg-[#0a192f] text-gray-300' >
          {/* COntainer*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-300'>Skills</p>
                <p className='py-4'>// These are the technologys I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MySQL} alt="mysql icon" />
                    <p className='my-4'>MySQL</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ML} alt="ml icon" />
                    <p className='my-4'>Machine Learning</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Pandas} alt= "pandas icon" />
                    <p className='my-4'>Pandas</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Numpy} alt="ny icon" />
                    <p className='my-4'>Numpy</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PowerBI} alt="bi icon" />
                    <p className='my-4'>PowerBI</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tableau} alt="bi icon" />
                    <p className='my-4'>Tableau</p>
                </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MongoDB} alt="MOngoose icon" />
                    <p className='my-4'>MongoDB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
