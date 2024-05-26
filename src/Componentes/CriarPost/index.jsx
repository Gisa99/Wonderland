import AddIcon from '@mui/icons-material/Add';
import User from '../User';

const CriarPost = () =>{
    return(
        <div className='flex pl-2 pr-2 pt-20 pb-4 justify-around items-center bg-gray-100 lg:justify-center lg:w-full gap-4'>
            <div className='lg:hidden cursor-pointer'>
                <User />
            </div>
            <div className='flex  rounded-md border items-center lg:w-full'>
                <input className='w-64  lg:w-full rounded-l-lg h-12 pl-2' type="text" placeholder='Solte sua criatividade...'/>
                <div className="bg-roxoIntenso rounded-r-lg h-12 flex items-center">
                <AddIcon sx={{ fontSize: 40, color: '#FFFFFF', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }}/>
                </div>

            </div>
        </div>

    )
}

export default CriarPost